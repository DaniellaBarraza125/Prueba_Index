import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formService from "./formService";

const initialState = {
    forms: [],
    isLoading: false,
    error: null,
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getForms.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getForms.fulfilled, (state, action) => {
                state.forms = action.payload;
                state.isLoading = false;
            })
            .addCase(getForms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export const getForms = createAsyncThunk(
    "form/getForms",
    async (_, { rejectWithValue }) => {
        try {
            const forms = await formService.getForms();
            return forms;
        } catch (error) {
            console.error("Error fetching forms:", error);
            return rejectWithValue({ error: "Failed to fetch forms" });
        }
    },
);

export const { reset } = formSlice.actions;
export default formSlice.reducer;

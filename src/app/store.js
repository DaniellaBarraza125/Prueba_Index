import { configureStore } from "@reduxjs/toolkit";
import form from "../features/form/formSlice";

export const store = configureStore({
    reducer: {
        form,
    },
});

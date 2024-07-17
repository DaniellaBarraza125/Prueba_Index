const getForms = () => {
    const forms = JSON.parse(localStorage.getItem("Forms")) || [];
    if (!Array.isArray(forms)) {
        console.error("Forms retrieved from localStorage is not an array");
        return [];
    }
    return forms;
};
const deleteCard = (id) => {
    const forms = JSON.parse(localStorage.getItem("Forms")) || [];

    const updatedForms = forms.filter((form) => form.id !== id);
    localStorage.setItem("Forms", JSON.stringify(updatedForms));

    return updatedForms;
};

const formService = {
    getForms,
    deleteCard,
};

export default formService;

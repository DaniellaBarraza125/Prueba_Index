const getForms = () => {
    let forms = JSON.parse(localStorage.getItem("Forms"));

    // Si forms no es un array, lo inicializamos como un array vacío
    if (!Array.isArray(forms)) {
        forms = [];
        localStorage.setItem("Forms", JSON.stringify(forms)); // Guardamos el array vacío en localStorage
    }

    console.log("Forms retrieved from localStorage:", forms);
    return forms;
};

const formService = {
    getForms,
};

export default formService;

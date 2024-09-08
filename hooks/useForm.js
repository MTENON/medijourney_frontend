import { useState } from "react";

export function useForm(initialValues = {}) { //Valeur par défaut: objet vide
    const [formData, setFormData] = useState(initialValues);

    function handleChange(name, value) {
        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    return {
        formData,
        handleChange,
    }
}
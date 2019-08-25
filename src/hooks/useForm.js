import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleChange = (event) => {
        event.persist();
        
        const value = event.target.value.length ? parseFloat(event.target.value) : "";
        setValues(values => ({ ...values, [event.target.name]: value }));
    };

    return {
        handleChange,
        values,
    }
};

export default useForm;
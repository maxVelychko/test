import { useState } from 'react';
import { calculate, validate, isNumber, getLastCharacter } from '../helpers';

const useForm = (initialValue, callback) => {
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const handleSubmit = event => {
        event.preventDefault();

        const newErrors = validate(values);
        const hasErrors = Object.keys(newErrors).length > 0;
        if (hasErrors) {
            const isFormValid = Object.keys(errors).length === 0;
            if (isFormValid) {
                callback();
            }
        } else {
            const { monthlyPayment, totalInterestPaid } = calculate(values);
            callback(monthlyPayment, totalInterestPaid);
        }
        setErrors(newErrors);
    };

    const handleChange = (event) => {
        event.persist();
        
        if (event.target.value === '') {
            return setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        }

        const lastCharacter = getLastCharacter(event.target.value);
        if (isNumber(lastCharacter)) {
            setValues(values => ({ ...values, [event.target.name]: parseFloat(event.target.value) }));
        }
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;
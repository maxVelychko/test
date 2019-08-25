import React from 'react';
import useForm from '../hooks/useForm';
import styles from './Form.module.css';
import cx from 'classnames';

const calculate = (inputs) => {
    return {
        monthlyPayment: 1, 
        totalInterestPaid: 1
    }
}

const Form = props => {
    const { values, handleChange } = useForm({
        carPrice: '',
        downPayment: '',
        yearsDuration: '',
        monthsDuration: '',
        interestRate: ''
    });

    const handleSubmit = event => {
        event.preventDefault();

        const { monthlyPayment, totalInterestPaid } = calculate(values);
        props.onSubmit(monthlyPayment, totalInterestPaid);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.inputContainer}>
                <p className={styles.inputTitle}>Car price($)</p>
                <input 
                    className={styles.input}
                    type="text"
                    name="carPrice"
                    value={values.carPrice} 
                    onChange={handleChange}
                />
            </label>
            <label className={styles.inputContainer}>
                <p className={styles.inputTitle}>Downpayment($)</p>
                <input 
                    className={styles.input}
                    type="text"
                    name="downPayment"
                    value={values.downPayment} 
                    onChange={handleChange}
                />
            </label>
            <label className={styles.inputContainer}>
                <p className={styles.inputTitle}>Loan duration</p>
                <input 
                    className={styles.input}
                    type="text"
                    name="yearsDuration"
                    value={values.yearsDuration}
                    placeholder="years"
                    onChange={handleChange}
                />
                <input 
                    className={cx(
                        styles.input,
                        styles.nextInput
                    )}
                    type="text"
                    name="monthsDuration"
                    value={values.monthsDuration}
                    placeholder="months"
                    onChange={handleChange}
                />
            </label>
            <label className={styles.inputContainer}>
                <p className={styles.inputTitle}>Interest rate</p>
                <input 
                    className={styles.input}
                    type="text"
                    name="interestRate"
                    value={values.interestRate}
                    onChange={handleChange}
                />
            </label>
            <input className={styles.submit} type="submit" value="Calculate" />
        </form>
    )
};

export default Form;
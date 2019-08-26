import React from 'react';
import useForm from '../hooks/useForm';
import styles from './Form.module.css';
import cx from 'classnames';

const initialState = {
    carPrice: '',
    downPayment: '',
    yearsDuration: '',
    monthsDuration: '',
    interestRate: ''
}

const Form = props => {
    const { values, errors, handleChange, handleSubmit } = useForm(initialState, props.onSubmit);

    return (
        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
            <label className={styles.inputContainer}>
                <p className={styles.inputTitle}>Car price($)</p>
                <input 
                    className={cx(styles.input, { [styles.inputError]: errors.carPrice })}
                    type="text"
                    name="carPrice"
                    value={values.carPrice}
                    onChange={handleChange}
                />
                {errors.carPrice && (
                    <p className={styles.errorText}>{errors.carPrice}</p>
                )}
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
                {errors.loanDuration && (
                    <p className={styles.errorText}>{errors.loanDuration}</p>
                )}
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
                    className={cx(styles.input, { [styles.inputError]: errors.interestRate })}
                    type="text"
                    name="interestRate"
                    value={values.interestRate}
                    onChange={handleChange}
                />
                {errors.interestRate && (
                    <p className={styles.errorText}>{errors.interestRate}</p>
                )}
            </label>
            <input className={styles.submit} type="submit" value="Calculate" />
        </form>
    )
};

export default Form;
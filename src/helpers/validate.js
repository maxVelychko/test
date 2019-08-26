const validate = (values) => {
    let errors = {};

    if (values.carPrice === '') {
        errors.carPrice = 'Car price is required';
    }

    if (values.yearsDuration === '' && values.monthsDuration === '') {
        errors.loanDuration = 'Loan duration is required';
    }

    if (values.interestRate === '') {
        errors.interestRate = 'Interest rate is required';
    }

    return errors;
};

export default validate;
import validate from './validate';

it('should return carPrice error if value is not passed', () => {
    const inputs = {
        carPrice: '',
        downPayment: '',
        yearsDuration: 2,
        monthsDuration: '',
        interestRate: 5
    };
    const expected = { carPrice: 'Car price is required' };

    const results = validate(inputs);

    expect(results).toEqual(expected);
});

it('should return loanDuration error if yearsDurationand and monthsDuration values are not passed', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: '',
        monthsDuration: '',
        interestRate: 5
    };
    const expected = { loanDuration: 'Loan duration is required' };

    const results = validate(inputs);

    expect(results).toEqual(expected);
});

it('should return interestRate error if value is not passed', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: 2,
        monthsDuration: '',
        interestRate: ''
    };
    const expected = { interestRate: 'Interest rate is required' };

    const results = validate(inputs);

    expect(results).toEqual(expected);
});

it('should return errors for all required values that are not passed ', () => {
    const inputs = {
        carPrice: '',
        downPayment: '',
        yearsDuration: '',
        monthsDuration: '',
        interestRate: ''
    };
    const expected = {
        carPrice: 'Car price is required',
        loanDuration: 'Loan duration is required',
        interestRate: 'Interest rate is required'
    };

    const results = validate(inputs);

    expect(results).toEqual(expected);
});

it('should not return errors if all required values are passed', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: 2,
        monthsDuration: '',
        interestRate: 5
    };
    const expected = {};

    const results = validate(inputs);

    expect(results).toEqual(expected);
});
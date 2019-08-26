import calculate from './calculate';

it('should calulate correctly without downPayment', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: '',
        monthsDuration: 12,
        interestRate: 5
    };
    const expected = {
        monthlyPayment: 856.07,
        totalInterestPaid: 272.84
    }

    const results = calculate(inputs);

    expect(results).toEqual(expected);
});

it('should calulate correctly with downPayment', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: 2000,
        yearsDuration: '',
        monthsDuration: 12,
        interestRate: 5
    };
    const expected = {
        monthlyPayment: 684.86,
        totalInterestPaid: 218.32
    }

    const results = calculate(inputs);

    expect(results).toEqual(expected);
});

it('should calulate correctly with years', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: 2,
        monthsDuration: '',
        interestRate: 5
    };
    const expected = {
        monthlyPayment: 438.71,
        totalInterestPaid: 529.04
    }

    const results = calculate(inputs);

    expect(results).toEqual(expected);
});

it('should calulate correctly with years and months', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: '',
        yearsDuration: 2,
        monthsDuration: 6,
        interestRate: 5
    };
    const expected = {
        monthlyPayment: 355.29,
        totalInterestPaid: 658.7
    }

    const results = calculate(inputs);

    expect(results).toEqual(expected);
});

it('should calulate correctly with all passed inputs', () => {
    const inputs = {
        carPrice: 10000,
        downPayment: 2000,
        yearsDuration: 2,
        monthsDuration: 6,
        interestRate: 5
    };
    const expected = {
        monthlyPayment: 284.23,
        totalInterestPaid: 526.9
    }

    const results = calculate(inputs);

    expect(results).toEqual(expected);
});
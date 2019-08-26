const calculateMonthlyPayment = (principal, annualInterestRate, months) => {
    const monthInterestRate = (annualInterestRate / 12) / 100;
    const toPower = Math.pow((1 + monthInterestRate), months);
    const monthlyPayment = principal * (monthInterestRate * toPower) / (toPower - 1);

    return Math.round(monthlyPayment * 100) / 100;
}

const calculateTotalInterestPaid = (months, monthlyPayment, loanAmount) => {
    const totalInterestPaid = (months * monthlyPayment) - loanAmount;
    
    return Math.round(totalInterestPaid * 100) / 100;
}

const calculate = (inputs) => {
    const { carPrice, downPayment, yearsDuration, interestRate } = inputs;
    const monthsDuration = inputs.monthsDuration === '' ? 0 : inputs.monthsDuration;

    const months = yearsDuration * 12 + monthsDuration;
    const loanAmount = carPrice - downPayment;
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, months);
    const totalInterestPaid = calculateTotalInterestPaid(months, monthlyPayment, loanAmount);

    return {
        monthlyPayment,
        totalInterestPaid
    };
}

export default calculate;
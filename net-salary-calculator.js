// Define the allowances object with various relief and contribution values
const allowances = {
    personalRelief: 2400,
    insuranceRelief: 5000,
    pensionContribution: 20000,
    housingRelief: 9000,
    ownerOccupierInterest: 25000
};

// Define the taxBrackets array with tax limits and corresponding rates
const taxBrackets = [
    { limit: 24000, rate: 0.1 },
    { limit: 32333, rate: 0.25 },
    { limit: 500000, rate: 0.3 },
    { limit: 800000, rate: 0.325 },
    { limit: Infinity, rate: 0.35 }
];

// Function to calculate payee (tax) based on taxable income
function calculatePayee(taxableIncome) {
    if (taxableIncome <= 0) {
        return 0; // No PAYE if taxable income is zero or negative
    }

    let payee = 0;

    // Calculate payee based on taxable income and tax brackets
    for (const bracket of taxBrackets) {
        if (taxableIncome <= bracket.limit) {
            payee += (taxableIncome - (bracket === taxBrackets[0] ? 0 : taxBrackets[taxBrackets.indexOf(bracket) - 1].limit)) * bracket.rate;
            break;
        } else {
            payee += (bracket.limit - (bracket === taxBrackets[0] ? 0 : taxBrackets[taxBrackets.indexOf(bracket) - 1].limit)) * bracket.rate;
        }
    }

    return payee;
}


// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    let nhifDeductions = 0;
    // NHIF rates
    const nhifRates = [
        { limit: 5999, amount: 150 },
        { limit: 7999, amount: 300 },
        { limit: 11999, amount: 400 },
        { limit: 14999, amount: 500 },
        { limit: 19999, amount: 600 },
        { limit: 24999, amount: 750 },
        { limit: 29999, amount: 850 },
        { limit: 34999, amount: 900 },
        { limit: 39999, amount: 950 },
        { limit: 44999, amount: 1000 },
        { limit: 49999, amount: 1100 },
        { limit: 59999, amount: 1200 },
        { limit: 69999, amount: 1300 },
        { limit: 79999, amount: 1400 },
        { limit: 89999, amount: 1500 },
        { limit: 99999, amount: 1600 },
        { limit: Infinity, amount: 1700 }
    ];

    for (let rate of nhifRates) {
        if (basicSalary <= rate.limit) {
            nhifDeductions = rate.amount;
            break;
        }
    }

    return nhifDeductions;
}


// Function to calculate NSSF deductions based on basic salary
function calculateNSSF(basicSalary) {
    // Assuming NSSF deduction rate is fixed at 6%
    return basicSalary * 0.06;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits, allowances) {
    const payee = calculatePayee(basicSalary, allowances);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
}

// Function to calculate taxable income based on basic salary and allowances/exemptions
function calculateTaxableIncome(basicSalary, allowances) {
    let taxableIncome = basicSalary;

    // Subtract allowances one by one
    for (const [key, value] of Object.entries(allowances)) {
        taxableIncome -= value;

        // Check if taxable income becomes negative after applying an allowance
        if (taxableIncome < 0) {
            taxableIncome += value; // Revert the allowance if taxable income is negative
            break; // Stop subtracting further allowances
        }
    }

    return taxableIncome;
}


const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits
const netSalary = calculateNetSalary(basicSalary, benefits, allowances);
console.log("Net Salary:", netSalary);

// const taxableIncome = calculateTaxableIncome(basicSalary, allowances); // Remove this line
const taxableIncome = basicSalary; // Or just set taxableIncome to basicSalary since allowances are not considered in the example usage
const payee = calculatePayee(taxableIncome);
console.log(`Taxable Income: ${taxableIncome}, Payee: ${payee}`);

const nhifDeductions = calculateNHIF(basicSalary);
console.log(`NHIF deductions: ${nhifDeductions}`);

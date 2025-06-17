const employees = [
  { name: "Ronan", hourlyRate: 25, hoursWorked: 38 },
  { name: "Vincent", hourlyRate: 20, hoursWorked: 45 },
  { name: "Kenny", hourlyRate: 30, hoursWorked: 50 }
];

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}
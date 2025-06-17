const employees = [
  { name: "Ronan", hourlyRate: 25, hoursWorked: 38 },
  { name: "Vincent", hourlyRate: 20, hoursWorked: 45 },
  { name: "Kenny", hourlyRate: 30, hoursWorked: 50 }
];

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}
// Посунути число на задану кількість розрядів вліво

let num = prompt("Enter a number:");
let shift = parseInt(prompt("Enter the number of digits to shift:"));
let shifted = num.slice(shift) + num.slice(0, shift);
console.log("Shifted number: " + shifted);

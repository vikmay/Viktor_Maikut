// Task 4: Знайти кількість цифр у введеному числі

let num = parseInt(prompt("Enter a number:"));
let numString = num.toString();
let numOfDigits = numString.length;
console.log("The number of digits in " + num + " is: " + numOfDigits);
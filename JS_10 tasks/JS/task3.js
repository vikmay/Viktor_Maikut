// Task 3. Попросити у користувача число и вивести всі дільники цього числа.

let num = parseInt(prompt("Enter a number:"));
let divisors = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i);
  }
}
console.log("The divisors of " + num + " are: " + divisors.join(", "));
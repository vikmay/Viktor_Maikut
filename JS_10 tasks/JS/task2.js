//Task2 Запросити 2 числа и знайти тільки найбільший спільний дільник.

function gcd(a, b) {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  let num1 = parseInt(prompt("Enter the first number: "));
  let num2 = parseInt(prompt("Enter the second number: "));
  
  let result = gcd(num1, num2);
  console.log("The greatest common divisor of " + num1 + " and " + num2 + " is " + result + ".");
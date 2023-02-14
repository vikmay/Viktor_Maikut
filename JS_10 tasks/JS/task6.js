// Зациклений калькулятор для вводу 2 чисел і знаку

while (true) {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        alert("Invalid operator.");
        continue;
    }
  
    alert("Result: " + result);
    let repeat = prompt("Do you want to calculate another expression? (yes/no)");
    if (repeat === "no") {
      break;
    }
  }
  
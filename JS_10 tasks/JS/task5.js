// Task 5. Порахувати додатні, від'ємні,парні, непарні числа і нулі

let input = prompt("Enter 10 numbers separated by a space: ");
let numbers = input.split(" ").map(Number);

let positiveCount = 0, negativeCount = 0, zeroCount = 0, evenCount = 0, oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Positive numbers: " + positiveCount);
console.log("Negative numbers: " + negativeCount);
console.log("Zero numbers: " + zeroCount);
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);
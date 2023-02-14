// Task1 . Підрахувати суму всіх чисел в заданому користувачем діапазоні.

let x = Number(prompt('Enter the initial number of range'));
let y = Number(prompt('Enter the final number of range'));
const inputArray = [];
let sumOfArray;
if (x < y) {
    for (let i = x; i <= y; i++) {
        inputArray.push(i);
    }
}
// якшо користувачу захочеться ввести діапазон навпаки
else {
    for (let i = y; i <= x; i++) {
        inputArray.push(i);
    }
}
sumOfArray = 0;
for (let i = 0; i < inputArray.length; i++) {
    sumOfArray += inputArray[i];
}

console.log("The sum of the numbers in the range is " + sumOfArray + ".");


// Task10. Гра"Вгадай число"
let min = 0;
let max = 100;
let guess = Math.floor((max + min) / 2);
let answer;

while (answer !== '==') {
  answer = prompt(`Is your number >, < or == ${guess}?`);

  if (answer === '>') {
    min = guess + 1;
  } else if (answer === '<') {
    max = guess - 1;
  }

  guess = Math.floor((max + min) / 2);
}

alert(`The number you thought of is ${guess}!`);
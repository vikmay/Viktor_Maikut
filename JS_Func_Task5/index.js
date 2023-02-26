// Функція зведення числа у ступінь

function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else if (exponent === 1) {
      return base;
    } else {
      return base * power(base, exponent - 1);
    }
  }

//   Функція пошуку найбільшого спільного дільника

function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

//   Функція для пошуку максимальної цифри у числі

function maxDigit(num) {
    if (num < 10) {
      return num;
    } else {
      let lastDigit = num % 10;
      let remainingDigits = Math.floor(num / 10);
      let maxRemainingDigit = maxDigit(remainingDigits);
      return Math.max(lastDigit, maxRemainingDigit);
    }
  }

//   Функція, яка визначає чи є передане число простим

function isPrime(num) {
    if (num <= 1) {
      return false;
    } else if (num <= 3) {
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      return false;
    } else {
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return false;
        }
      }
      return true;
    }
  }

//   Функція для виведення усіх множників, переданих числу у зростаючому порядку

function printFactors(num, factor = 2) {
    if (num === 1) {
      return;
    } else if (num % factor === 0) {
      console.log(factor);
      printFactors(num / factor, factor);
    } else {
      printFactors(num, factor + 1);
    }
  }
  
//   Функція, яка повертає число Фібоначчі за переданим порядковим номером

function fibonacci(n) {
    if (n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
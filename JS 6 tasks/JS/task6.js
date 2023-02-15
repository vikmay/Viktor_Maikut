// Task 6. Функція виводу досконалих чисел з діапазону
function getPerfectNumbers(min, max) {
    const perfectNumbers = [];
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
    return perfectNumbers;
  }
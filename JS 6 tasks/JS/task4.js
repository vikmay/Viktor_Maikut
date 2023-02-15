// Task4. Функція обчислення площі прямокутника або квадрата
function rectangleArea(length, width) {
    if (width === undefined) {
      width = length;
    }
    return length * width;
  };
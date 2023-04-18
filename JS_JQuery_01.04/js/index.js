// Функція, яка приймає рядок та виводить статистику: кількість літер, кількість цифр та кількість інших знаків.
function stringStatistics(str) {
    let letters = 0, digits = 0, others = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Zа-яА-Я]/)) {
            letters++;
        } else if (str[i].match(/[0-9]/)) {
            digits++;
        } else {
            others++;
        }
    }

    console.log(`Літер: ${letters}, Цифр: ${digits}, Інших знаків: ${others}`);
}

stringStatistics("Приклад123!?");

// Функція, яка приймає двозначне число і повертає його в текстовому вигляді.
function numberToText(number) {
    const ones = ['', 'один', 'два', 'три', 'чотири', 'п’ять', 'шість', 'сім', 'вісім', 'дев’ять', 'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п’ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев’ятнадцять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п’ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев’яносто'];

    if (number < 20) {
        return ones[number];
    }
    const firstDigit = Math.floor(number / 10);
    const secondDigit = number % 10;
    return tens[firstDigit] + (secondDigit ? ' ' + ones[secondDigit] : '');
}

console.log(numberToText(35));
console.log(numberToText(89));
console.log(numberToText(12));

// Функція, яка замінює в отриманому рядку великі літери на маленькі, маленькі – на великі, а цифри – на знак нижнього підкреслення.
function swapCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zа-я]/)) {
            result += str[i].toUpperCase();
        } else if (str[i].match(/[A-ZА-Я]/)) {
            result += str[i].toLowerCase();
        } else if (str[i].match(/[0-9]/)) {
            result += '_';
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(swapCase("Example123!"));

// Функція, яка перетворює назви CSS-стилів з дефісом у назву в Сamelcase-стилі.
function toCamelCase(cssProperty) {
    let camelCase = '';
    let shouldCapitalize = false;

    for (let i = 0; i < cssProperty.length; i++) {
        if (cssProperty[i] === '-') {
            shouldCapitalize = true;
            continue;
        }
        if (shouldCapitalize) {
            camelCase += cssProperty[i].toUpperCase();
            shouldCapitalize = false;
        } else {
            camelCase += cssProperty[i];
        }
    }

    return camelCase;
}

console.log(toCamelCase('font-size'));
console.log(toCamelCase('background-color'));
console.log(toCamelCase('text-align'));

// Функція, яка приймає словосполучення і перетворює його на абревіатуру.
function toAbbreviation(phrase) {
    const words = phrase.split(' ');
    let abbreviation = '';

    for (const word of words) {
        abbreviation += word[0].toUpperCase();
    }

    return abbreviation;
}

console.log(toAbbreviation('cascading style sheets'));
console.log(toAbbreviation('об’єктно-орієнтоване програмування'));

// Функція, яка приймає будь-яку кількість рядків, об’єднує їх в один довгий рядок і повертає його.
function joinStrings(...strings) {
    return strings.join('');
}

console.log(joinStrings('Рядок1', 'Рядок2', 'Рядок3'));

// Функція-калькулятор. Функція приймає рядок з прикладом, визначає, яку дію необхідно виконати (+ - */), переводить операнди у числа, розв'язує приклад і повертає результат.
function calculator(expression) {
    const operators = ['+', '-', '*', '/'];
    let operator = '';
    let operands = [];
  
    
    for (const op of operators) {
      if (expression.includes(op)) {
        operator = op;
        operands = expression.split(op);
        break;
      }
    }
  
    
    const operand1 = parseFloat(operands[0]);
    const operand2 = parseFloat(operands[1]);
  

    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return 'Невідомий оператор';
    }
  }
  
  console.log(calculator('12+34'));
  console.log(calculator('12-34'));
  console.log(calculator('12*34'));
  console.log(calculator('12/34'));

  // Функція, яка отримує url і виводить докладну інформацію про нього.
function parseURL(url) {
    const parser = new URL(url);
    const protocol = parser.protocol;
    const domain = parser.hostname;
    const path = parser.pathname;
    console.log(`Протокол: ${protocol}, Домен: ${domain}, Шлях: ${path}`);
  }
  
  parseURL('https://itstep.org/ua/about');

  //Функція, яка приймає рядок та роздільник, і
//  повертає масив підрядків, розбитих за допомогою вказаного роздільника. 
  function customSplit(string, delimiter) {
    let result = [];
    let tempStr = "";
  
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char === delimiter) {
        result.push(tempStr);
        tempStr = "";
      } else {
        tempStr += char;
      }
    }
  
    result.push(tempStr);
    return result;
  }
  
  let inputString = "10/08/2020";
  let delimiter = "/";
  let result = customSplit(inputString, delimiter);
  
  console.log(result); // Вихід: [ '10', '08', '2020' ]
  
  
// Функція виведення тексту за заданим шаблоном.
function print(template, ...values) {
    let result = '';
    let valueIndex = 0;
  
    for (let i = 0; i < template.length; i++) {
      if (template[i] === '%' && template[i + 1] >= '1' && template[i + 1] <= '9') {
        valueIndex = parseInt(template[i + 1]) - 1;
        result += values[valueIndex] || '';
        i++;
      } else {
        result += template[i];
      }
    }
  
    console.log(result);
  }
  
  print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
  
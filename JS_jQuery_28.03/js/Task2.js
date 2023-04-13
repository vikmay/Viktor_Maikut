function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

// Функція для знаходження найбільшого спільного дільника
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Функція додавання двох дробів
Fraction.prototype.add = function (otherFraction) {
    let newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
    let newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator).reduce();
};

// Функція віднімання двох дробів
Fraction.prototype.subtract = function (otherFraction) {
    let newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
    let newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator).reduce();
};

// Функція множення двох дробів
Fraction.prototype.multiply = function (otherFraction) {
    let newNumerator = this.numerator * otherFraction.numerator;
    let newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator).reduce();
};

// Функція ділення двох дробів
Fraction.prototype.divide = function (otherFraction) {
    let newNumerator = this.numerator * otherFraction.denominator;
    let newDenominator = this.denominator * otherFraction.numerator;
    return new Fraction(newNumerator, newDenominator).reduce();
};

// Функція скорочення дробу
Fraction.prototype.reduce = function () {
    let divisor = gcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / divisor, this.denominator / divisor);
};

let fraction1 = new Fraction(5, 6);
let fraction2 = new Fraction(8, 9);

console.log(`Сума: ${ fraction1.add(fraction2).numerator } / ${ fraction1.add(fraction2).denominator }`);
console.log(`Різниця: ${ fraction1.subtract(fraction2).numerator } / ${ fraction1.subtract(fraction2).denominator }`);
console.log(`Добуток: ${ fraction1.multiply(fraction2).numerator } / ${ fraction1.multiply(fraction2).denominator }`);
console.log(`Частка: ${ fraction1.divide(fraction2).numerator } / ${ fraction1.divide(fraction2).denominator }`);
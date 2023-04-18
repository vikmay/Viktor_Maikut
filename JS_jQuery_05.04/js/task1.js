//Task1
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value < 0) {
            throw new Error("Радіус кола не може бути від'ємним");
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    area() {
        return Math.PI * this._radius * this._radius;
    }

    circumference() {
        return 2 * Math.PI * this._radius;
    }
} 
const circle = new Circle(5);

console.log("Радіус:", circle.radius); // Радіус: 5
console.log("Діаметр:", circle.diameter); // Діаметр: 10
console.log("Площа:", circle.area()); // Площа: 78.53981633974483
console.log("Довжина:", circle.circumference()); // Довжина: 31.41592653589793

circle.radius = 10;
console.log("Новий радіус:", circle.radius); // Новий радіус: 10
console.log("Новий діаметр:", circle.diameter); // Новий діаметр: 20
console.log("Нова площа:", circle.area()); // Нова площа: 314.1592653589793
console.log("Нова довжина:", circle.circumference()); // Нова довжина: 62.83185307179586
// Завдання 1
class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(string) {
        let result = '';

        for (const char of string) {
            if (this.inkAmount <= 0) {
                break;
            }

            if (char !== ' ') {
                this.inkAmount -= 0.5;
            }

            result += char;
        }

        console.log(`%c${result}`, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    refill(amount) {
        this.inkAmount += amount;
    }
}

const marker = new RefillableMarker('blue', 10);
marker.print('Hello World!');
marker.refill(5);
marker.print('Hello World!');

// Завдання 2
class ExtendedDate extends Date {
    getDateText() {
        const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFutureOrPresent() {
        const today = new Date();
        return this >= today;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new ExtendedDate(this.getTime());
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

const extDate = new ExtendedDate();
console.log(extDate.getDateText());
console.log(extDate.isFutureOrPresent());
console.log(extDate.isLeapYear());
console.log(extDate.getNextDate());

// Завдання 3
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

const employees = [
    new Employee('Ihor Laliuk', 'Sftware Engineer'),
    new Employee('Ihor Laliuk', 'Teacher'),
    new Employee('Ihot Laliuk', 'Bachelor')
];

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let table = '<table><tr><th>Name</th><th>Position</th></tr>';

        for (const employee of this.employees) {
            table += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        }

        table += '</table>';
        return table;
    }
}

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());

// Завдання 4
class StyledEmpTable extends EmpTable {
    getStyles() {
        return `<style>
            table {
                border-collapse: collapse;
                width: 50%;
            }

            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
            }
        </style>`;
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

const styledEmpTable = new StyledEmpTable(employees);
document.write(styledEmpTable.getHtml());
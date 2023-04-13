function Car(manufacturer, model, year, averageSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
}

// Інформація про автомобіль
Car.prototype.displayInfo = function () {
    console.log(`Виробник: ${this.manufacturer}
    Модель: ${this.model}
    Рік випуску: ${this.year}
    Середня швидкість: ${this.averageSpeed} км/год`);
};

// Розрахувати час необхідний для подорожі враховуючи час на перерви
Car.prototype.calculateTime = function (distance) {
    let time = distance / this.averageSpeed;
    let restTime = Math.floor(time / 4);
    let totalTime = time + restTime;

    // Розрахувати години, хвилини, секунди для виводу
    let hours = Math.floor(totalTime);
    let minutes = Math.floor((totalTime - hours) * 60);
    let seconds = Math.floor(((totalTime - hours) * 60 - minutes) * 60);

    return {hours, minutes, seconds};
};

let myCar = new Car("Ford", "Escort", 1996, 70);
myCar.displayInfo();

let travelTime = myCar.calculateTime(500);
console.log(`Потрібно часу: ${travelTime.hours} годин, ${travelTime.minutes} хвилин, ${travelTime.seconds} секунд`);

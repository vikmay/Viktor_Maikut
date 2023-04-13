function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    }
    
    // Функція виведення часу на екран
    Time.prototype.displayTime = function () {
    console.log(`${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`);
    };
    
    // Функція зміни часу на передану кількість секунд
    Time.prototype.changeSeconds = function (seconds) {
    let newSeconds = this.seconds + seconds;
    let minutesFromSeconds = Math.floor(newSeconds / 60);
    this.seconds = newSeconds % 60;
    this.changeMinutes(minutesFromSeconds);
    };
    
    // Функція зміни часу на передану кількість хвилин
    Time.prototype.changeMinutes = function (minutes) {
    let newMinutes = this.minutes + minutes;
    let hoursFromMinutes = Math.floor(newMinutes / 60);
    this.minutes = newMinutes % 60;
    this.changeHours(hoursFromMinutes);
    };
    
    // Функція зміни часу на передану кількість годин
    Time.prototype.changeHours = function (hours) {
    let newHours = this.hours + hours;
    this.hours = newHours % 24;
    };
    
    let myTime = new Time(20, 30, 45);
    myTime.displayTime(); // Виводимо поточний час
    myTime.changeSeconds(30); // Змінюємо час на 30 секунд
    myTime.displayTime(); // Виводимо змінений час
    myTime.changeMinutes(90); // Змінюємо час на 90 хвилин
    myTime.displayTime(); // Виводимо змінений час
    myTime.changeHours(8); // Змінюємо час на 8 годин
    myTime.displayTime(); // Виводимо змінений час
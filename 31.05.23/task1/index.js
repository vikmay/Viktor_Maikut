// Отримуємо посилання на елементи
let slider = document.querySelector('.slider');
let knob = document.querySelector('.knob');

// Встановлюємо початкове положення вказівника
let knobPosition = 0;

// Функція, яка буде виконуватися при перетягуванні вказівника
function handleDrag(event) {
  // Отримуємо положення курсора миші
  let mouseX = event.clientX;

  // Обчислюємо відстань між початковим положенням вказівника та положенням курсора
  let distance = mouseX - slider.offsetLeft;

  // Змінюємо положення вказівника
  knob.style.left = distance + 'px';

  // Оновлюємо значення положення вказівника
  knobPosition = distance;
}

// Додаємо обробник події для початку перетягування вказівника
knob.addEventListener('mousedown', function() {
  // Додаємо обробник події перетягування миші
  document.addEventListener('mousemove', handleDrag);
});

// Додаємо обробник події для закінчення перетягування вказівника
document.addEventListener('mouseup', function() {
  // Видаляємо обробник події перетягування миші
  document.removeEventListener('mousemove', handleDrag);
});
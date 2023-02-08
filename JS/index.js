alert("Задумай число!");
alert("Помнож задумане число на 2!")
alert("Додай до результату 7!")
let result;
for (; ;) {
    result = prompt("Введи що вийшло");
    if (isNaN(result)) alert('Тільки цифри!!!');
    else break;
}
const userNumber = (result - 7) / 2;
alert(`Ви задумали число  ${userNumber}`);
window.close();





// Список покупок
const shoppingList = [
    { name: 'Яблука', quantity: 5, bought: true },
    { name: 'Молоко', quantity: 1, bought: false },
    { name: 'Хліб', quantity: 1, bought: true },
    { name: 'Яйця', quantity: 10, bought: false },
];

// Виведення списку покупок
function displayList(list) {
    const notBought = list.filter(item => !item.bought);
    const bought = list.filter(item => item.bought);
    const sortedList = [...notBought, ...bought];

    sortedList.forEach(item => console.log(`${item.name}: ${item.quantity}`));
}

// Додавання покупки до списку
function addItem(list, name, quantity) {
    const item = list.find(item => item.name === name);

    if (item) {
        item.quantity += quantity;
    } else {
        list.push({ name, quantity, bought: false });
    }
}

// Купівля продукту
function buyItem(list, name) {
    const item = list.find(item => item.name === name);

    if (item) {
        item.bought = true;
    }
}

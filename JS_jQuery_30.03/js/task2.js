// Чек магазину
const receipt = [
    { name: 'Яблука', quantity: 4, price: 0.5 },
    { name: 'Молоко', quantity: 2, price: 1.2 },
    { name: 'Хліб', quantity: 3, price: 1.1 },
    { name: 'Яйця', quantity: 30, price: 0.1 },
];

// Виведення чека на екран
function displayReceipt(receipt) {
    receipt.forEach(item => console.log(`${item.name}: ${item.quantity} x ${item.price}`));
}

// Підрахунок загальної суми покупки
function totalAmount(receipt) {
    return receipt.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

// Отримання найдорожчої покупки у чеку
function mostExpensiveItem(receipt) {
    return receipt.reduce((expensive, item) => (item.price > expensive.price ? item : expensive));
}

// Підрахунок середньої вартості одного товару у чеку
function averageCostPerItem(receipt) {
    const totalItems = receipt.reduce((sum, item) => sum + item.quantity, 0);
    return totalAmount(receipt) / totalItems;
}

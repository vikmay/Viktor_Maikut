// Масив CSS-стилів
const cssStyles = [
    { property: 'color', value: 'red' },
    { property: 'font-size', value: '16px' },
    { property: 'text-align', value: 'center' },
    { property: 'text-decoration', value: 'underline' },
];

// Функція для виводу тексту зі стилями
function displayTextWithStyles(styles, text) {
    const styleString = styles.map(style => `${style.property}: ${style.value}`).join('; ');
    document.write(`<p style="${styleString}">${text}</p>`);
}

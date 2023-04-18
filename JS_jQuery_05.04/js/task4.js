//Task4

class CssClass2 {
    constructor(className, styles) {
        this.className = className;
        this.styles = styles;
    }

    getCode() {
        let styleString = `.${this.className} { `;
        for (const [property, value] of Object.entries(this.styles)) {
            styleString += `${property}: ${value}; `;
        }
        styleString += '}';
        return styleString;
    }
}

class HtmlElement2 {
    constructor(tagName, attributes = {}, children = []) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
    }

    getCode() {
        let elementString = `<${this.tagName}`;
        for (const [attribute, value] of Object.entries(this.attributes)) {
            elementString += ` ${attribute}="${value}"`;
        }
        elementString += '>';

        for (const child of this.children) {
            elementString += typeof child === 'string' ? child : child.getCode();
        }

        elementString += `</${this.tagName}>`;
        return elementString;
    }
}

class HtmlBlock {
    constructor(styles = [], rootElement) {
        this.styles = styles;
        this.rootElement = rootElement;
    }

    getCode() {
        let code = '<style>';
        for (const CssClass2 of this.styles) {
            code += CssClass2.getCode();
        }
        code += '</style>';
        code += this.rootElement.getCode();
        return code;
    }
}

// Створимо CssClass та HtmlElement об'єкти для прикладного блоку
const titleStyle = new CssClass2('title', {
    'font-size': '24px',
    'font-weight': 'bold',
});
const textStyle = new CssClass2('text', {
    'font-size': '16px',
    'color': '#333',
});

const titleElement = new HtmlElement2('h1', { class: 'title' }, ['Hello, world!']);
const textElement = new HtmlElement2('p', { class: 'text' }, ['Це прикладний блок сторінки.']);
const containerElement = new HtmlElement2('div', {}, [titleElement, textElement]);

// Створимо HtmlBlock об'єкт та додамо його на сторінку
const htmlBlock = new HtmlBlock([titleStyle, textStyle], containerElement);
document.write(htmlBlock.getCode());

  

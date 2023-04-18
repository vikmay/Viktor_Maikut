   //Task3
  class CssClass {
    constructor(name) {
      this.name = name;
      this.styles = {};
    }
  
    setStyle(property, value) {
      this.styles[property] = value;
    }
  
    removeStyle(property) {
      delete this.styles[property];
    }
  
    getCss() {
      let css = `.${this.name} {\n`;
      for (let property in this.styles) {
        css += `  ${property}: ${this.styles[property]};\n`;
      }
      css += "}\n";
      return css;
    }
  }

  // Створення нового CSS-класу
const myClass = new CssClass("myClass");

// Встановлення стилів
myClass.setStyle("width", "100px");
myClass.setStyle("height", "100px");
myClass.setStyle("background-color", "red");

// Видалення стилю
myClass.removeStyle("width");

// Отримання CSS-коду
console.log(myClass.getCss());
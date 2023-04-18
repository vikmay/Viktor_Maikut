//Task2
class HtmlElement {
    constructor(tag, attributes, content = "") {
      this.tag = tag;
      this.attributes = attributes;
      this.content = content;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  
    addChildToFront(child) {
      this.children.unshift(child);
    }
  
    getHtml() {
      let attributes = "";
      for (let key in this.attributes) {
        attributes += ` ${key}="${this.attributes[key]}"`;
      }
  
      let childrenHtml = this.children.map(child => child.getHtml()).join("");
      return `<${this.tag}${attributes}>${childrenHtml}${this.content}</${this.tag}>`;
    }
  }
  
  // Створення блоків
  const wrapper = new HtmlElement("div", { id: "wrapper", class: "wrap" });
  
  for (let i = 0; i < 2; i++) {
    const block = new HtmlElement("div", { class: "block" });
  
    const h3 = new HtmlElement("h3", {}, "What is Lorem Ipsum?");
    block.addChild(h3);
  
    const img = new HtmlElement("img", { class: "img", src: "http://picsum.photos/100/50", alt: "Lorem Ipsum" });
    block.addChild(img);
  
    const p = new HtmlElement("p", { class: "text" }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    const a = new HtmlElement("a", { href: "https://www.lipsum.com/", target: "_blank" }, "More...");
    p.addChild(a);
    block.addChild(p);
  
    wrapper.addChild(block);
  }
  
  // Додавання блоків на сторінку
  document.write(wrapper.getHtml());
  
  // Додавання стилів
  const style = `
    .wrap {
      display: flex;
    }
  
    .block {
      width: 300px;
      margin: 10px;
    }
  
    .img {
      width: 100%;
    }
  
    .text {
      text-align: justify;
    }
  `;
  
  const styleElement = new HtmlElement("style", {}, style);
  document.write(styleElement.getHtml());
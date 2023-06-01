class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
  
    getHtml() {
      let html = `<table><tr><th>Name</th><th>Position</th></tr>`;
      for (let emp of this.employees) {
        html += `<tr><td>${emp.name}</td><td>${emp.position}</td></tr>`;
      }
      html += `</table>`;
      return html;
    }
  }
  
  let employees = [new Employee('John Doe', 'Manager'), new Employee('Jane Doe', 'Developer')];
  let table = new EmpTable(employees);
  console.log(table.getHtml());
  
  
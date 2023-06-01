class StyledEmpTable extends EmpTable {
    getStyles() {
      return `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 10px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      `;
    }
  
    getHtml() {
      return this.getStyles() + super.getHtml();
    }
  }
  
  let styledTable = new StyledEmpTable(employees);
  console.log(styledTable.getHtml());
  
  
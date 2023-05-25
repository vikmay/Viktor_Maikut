function sortTable(columnIndex) {
  const table = document.getElementById("dataTable");
  const headerRow = table.rows[0];
  const dataRows = Array.from(table.tBodies[0].rows);

  const currentSortOrder = headerRow.cells[columnIndex].classList.contains("sort-asc");
  const sortDirection = currentSortOrder ? -1 : 1;

  dataRows.sort(function(rowA, rowB) {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (columnIndex === 1) {
      return sortDirection * (parseInt(cellA, 10) - parseInt(cellB, 10));
    } else {
      if (cellA < cellB) {
        return sortDirection * -1;
      } else if (cellA > cellB) {
        return sortDirection;
      } else {
        return 0;
      }
    }
  });

  for (let i = 0; i < dataRows.length; i++) {
    table.tBodies[0].appendChild(dataRows[i]);
  }

  // Remove sorting classes from all header cells
  for (let i = 0; i < headerRow.cells.length; i++) {
    headerRow.cells[i].classList.remove("sort-asc", "sort-desc");
  }

  // Add sorting class to the current header cell
  headerRow.cells[columnIndex].classList.add(currentSortOrder ? "sort-desc" : "sort-asc")
    // Move the header row to the top of the table
    table.deleteTHead();
    table.createTHead().appendChild(headerRow);
  }
  
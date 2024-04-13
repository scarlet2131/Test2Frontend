// Name: Monisha Ranjan
// Student Id : C0914148
window.onload = function() {

  // Centering the text and inline content horizontally for the form styling
  document.body.style.textAlign = 'center'; 

  // Ensur each input field remains on the same line as its label
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
      input.style.marginRight = '10px'; // Adds some spacing to the right of each input field
  });
   // Initially hiding the add column and add row buttons
   document.getElementById('b2').style.display = 'none';
   document.getElementById('b3').style.display = 'none';
};

//Generating the table 
function generateTable() {
  let numRows = document.getElementById('t1').value;
  let numCols = document.getElementById('t2').value;

  // Clearing the entire body and starting from fresh
  document.body.innerHTML = '';

  // Creating a heading for the table
  let heading = document.createElement('h2');
  heading.textContent = 'Test 2 - Part 2 ';
  //Adding style to the heading of the page
  heading.style.textAlign = 'center'; 
  heading.style.color = 'green'; 
  document.body.appendChild(heading);

  // Creating the table 
  let table = document.createElement('table');
  table.id = 'dynamicTable';
  //Addig styles for the table 
  table.style.width = '80%'; 
  table.style.margin = '20px auto'; 
  //Ensuring the borders betwen the cells are merged
  table.style.borderCollapse = 'collapse'; 
  //Added he background color to the table for view
  table.style.backgroundColor = 'black'; 
  // Adds a subtle shadow around the table
  table.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'; 
  table.style.color = 'white'; 

  for (let i = 0; i < numRows; i++) {
      let row = table.insertRow();
      for (let j = 0; j < numCols; j++) {
          let cell = row.insertCell();
          // Populating cell with coordinates
          cell.innerHTML = `Cell (${i},${j})`; 
          //Adding styling for the cell 
          cell.style.border = '1px solid grey'; 
          cell.style.padding = '15px'; 
          cell.style.textAlign = 'center'; 
      }
  }

  // Creating a div for the table 
  let container = document.createElement('div');
  container.id = 'tableContainer';
  container.appendChild(table);
  document.body.appendChild(container);

  // Creating a div for buttons to center  
  let buttonContainer = document.createElement('div');
  buttonContainer.style.textAlign = 'center'; 

  // Creating and adding  'Add Column' button
  let addColumnButton = document.createElement('button');
  addColumnButton.textContent = 'Add Column';
  addColumnButton.style.backgroundColor = 'green'; 
  addColumnButton.style.color = 'white'; 
  addColumnButton.style.margin = '10px'; 
  addColumnButton.onclick = function() { addColumn(); };
  buttonContainer.appendChild(addColumnButton);

  // Creating and adding 'Add Row' button
  let addRowButton = document.createElement('button');
  addRowButton.textContent = 'Add Row';
  addRowButton.style.backgroundColor = 'green'; 
  addRowButton.style.color = 'white'; 
  addRowButton.style.margin = '10px'; 
  addRowButton.onclick = function() { addRow(); };
  buttonContainer.appendChild(addRowButton);

  // Appending the button container below the table container
  document.body.appendChild(buttonContainer);
}

//Addig column to the table 
function addColumn() {
  let table = document.getElementById('dynamicTable');
  if (table) {
      for (let i = 0; i < table.rows.length; i++) {
          let newCell = table.rows[i].insertCell(-1);
          newCell.innerHTML = `Cell (${i},${table.rows[i].cells.length - 1})`;
          //Added styles to the new columns added giving new color to the button
          newCell.style.border = '1px solid grey';
          newCell.style.padding = '15px';
          newCell.style.color = 'white';
          newCell.style.backgroundColor = 'purple'; 
          newCell.style.textAlign = 'center'; 

      }
  }
}
//Addig row to the table 
function addRow() {
  let table = document.getElementById('dynamicTable');
  if (table) {
      let newRow = table.insertRow(-1);
      for (let j = 0; j < table.rows[0].cells.length; j++) {
          let newCell = newRow.insertCell();
          newCell.innerHTML = `Cell (${table.rows.length - 1},${j})`;
          //Added different color for new rows 
          newCell.style.border = '1px solid grey';
          newCell.style.padding = '15px';
          newCell.style.color = 'white'; 
          newCell.style.backgroundColor = 'orange'; 
          newCell.style.textAlign = 'center'; 

      }
  }
}

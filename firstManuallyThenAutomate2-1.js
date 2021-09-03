const body = document.getElementsByTagName('body')[0];
body.style.display = 'flex';

function addCol() {
  const col1 = document.createElement('div');
  col1.innerText = 'col1';
  col1.style.width = '3rem';
  col1.style.border = '3px solid black';
  body.appendChild(col1);
}
addCol();
// notice how that modifies access
// notice how that const was a dependency
// notice how dependency can create problem when automating

// process of building automation, step-higher by step-higher

function addRow(col) {
  const row = document.createElement('div');
  row.innerText = 'row';
  col.appendChild(row);
}
addRow(col1);
addRow(col1);
addRow(col1);
addRow(col1);
addRow(col1);
addRow(col1);


const col2 = document.createElement('div');
col2.innerText = 'col2';
col2.style.width = '3rem';
col2.style.border = '3px solid black';
body.appendChild(col2);
addRow(col2);
addRow(col2);
addRow(col2);


const col3 = document.createElement('div');
col3.innerText = 'col3';
col3.style.width = '3rem';
col3.style.border = '3px solid black';
body.appendChild(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
addRow(col3);
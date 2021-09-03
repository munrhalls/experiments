const body = document.getElementsByTagName('body')[0];
body.style.display = 'flex'



function addCol() {
  const col1 = document.createElement('div');
  col1.innerText = 'col1';
  col1.style.width = '3rem';
  col1.style.border = '3px solid black';
  body.appendChild(col1);
}
addCol();

// process of building automation, step-higher by step-higher
// notice AN ERROR IN BUILDING AUTOMATION - I'm better off first automating 1 col and 1 row, complete packet, then automate automating that 
// instead of automating rows - and then cols
// B I G practical difference
// the latter = huge wastes of time

// notice how this is already difficult to solve, extra problems from nothing else, than sequence choice

// better automate one complete package (col + rows), then automate creating more of that
// than to automate type 1 (col) and then type 2 (rows) - that misses automating relationship, which needs to be filled, which means huge wastes of time later on
// SEQUENCE CHOICE = huge practical connotations


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
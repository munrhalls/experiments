function addColRow() {
  const body = document.getElementsByTagName('body')[0];
  body.style.display = 'flex';
  const col = document.createElement('div');
  col.innerText = 'col';
  col.style.border = '3px solid black';
  const row = document.createElement('div');
  row.innerText = 'row';
  col.appendChild(row);
  body.appendChild(col);
  const row2 = document.createElement('div');
  row2.innerText = 'row2';
  col.appendChild(row2);
  body.appendChild(col);
}

function runFuncManyx(count, func) {
  new Array(count).fill(null).forEach(() => func());
}

runFuncManyx(10000, addColRow);
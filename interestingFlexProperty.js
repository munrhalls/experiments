const body = document.getElementsByTagName('body')[0];
body.style.display = 'flex';

const col = document.createElement('div');
// col.style.height = '100vh';
col.innerText = 'col';
col.style.width = '3rem';
col.style.border = '3px solid black';
body.appendChild(col);

const row = document.createElement('div');
row.innerText = 'row';
col.appendChild(row);

const row2 = document.createElement('div');
row2.innerText = 'row2';
col.appendChild(row2);

const row3 = document.createElement('div');
row3.innerText = 'row3';
col.appendChild(row3);

const col2 = document.createElement('div');
// col2.style.height = '100vh';
col2.innerText = 'col2';
col2.style.width = '3rem';
col2.style.border = '3px solid black';
body.appendChild(col2);

const col3 = document.createElement('div');
// col3.style.height = '100vh';
col3.innerText = 'col3';
col3.style.width = '3rem';
col3.style.border = '3px solid black';
body.appendChild(col3);
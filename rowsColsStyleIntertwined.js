const append = function (what, where) {
  where.appendChild(what);
}

const body = document.getElementsByTagName('body')[0];
const column = document.createElement('div');
column.innerText = 'column';
column.style.height = '100vh'
column.style.fontSize = '0.5rem';
column.style.width = '3rem';
column.style.border = '0.25rem  solid black';
column.style.display = 'inline-block';
append(column, body);

const column2 = document.createElement('div');
column2.innerText = 'column2';
column2.style.height = '100vh'
column2.style.fontSize = '0.5rem';
column2.style.width = '3rem';
column2.style.border = '0.25rem  solid black';
column2.style.display = 'inline-block';
append(column2, body);

const column3 = document.createElement('div');
column3.innerText = 'column3';
column3.style.height = '100vh'
column3.style.fontSize = '0.5rem';
column3.style.width = '3rem';
column3.style.border = '0.25rem  solid black';
column3.style.display = 'inline-block';
append(column3, body);

// notice how style and the concept of column / rows is intertwined here
// column requiring 100% height either via vh or via body being 100vh & then still needs vh 100%

const divbox = document.createElement('div');
divbox.innerText = 'divbox';
divbox.style.fontSize = '0.6rem';
divbox.style.textAlign = 'center';
divbox.style.display = 'flex';
divbox.style.justifyContent = 'center';
divbox.style.alignItems = 'center';
divbox.style.border = '0.25rem solid black';
divbox.style.height = '3rem';
divbox.style.width = '3rem';
// append(divbox, column);






const body = document.getElementsByTagName('body')[0];

function appendDivbox() {
  const divbox = document.createElement('div');
  divbox.innerText = 'divbox';
  body.appendChild(divbox);
  divbox.style.border = '1px solid #000000';
  divbox.style.height = '15rem';
  divbox.style.width = '15rem';
  divbox.style.display = 'flex';
  divbox.style.justifyContent = 'center';
  divbox.style.alignItems = 'center';
}

const runManyFunc = (count, rFunc) => {
  [...new Array(count).fill(null)].forEach(() => {
    rFunc();
  });
}

runManyFunc(5, appendDivbox);
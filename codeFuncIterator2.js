const body = document.getElementsByTagName('body')[0];

function appendDivbox(to) {
  const divbox = document.createElement('div');
  divbox.innerText = 'divbox';
  divbox.style.fontSize = '0.3rem';
  divbox.style.textAlign = 'center';
  divbox.style.display = 'flex';
  divbox.style.justifyContent = 'center';
  divbox.style.alignItems = 'center';
  divbox.style.border = '0.25rem solid black';
  divbox.style.height = '1rem';
  divbox.style.width = '1rem';
  to.appendChild(divbox);
}

function runFuncManyx(count) {
  new Array(count).fill(null).forEach(() => appendDivbox(body));
}
// function is hardcoded inside

runFuncManyx(10000)
const body = document.getElementsByTagName('body')[0];

const divbox = document.createElement('div');
body.appendChild(divbox);
// !!!
divbox.innerText = 'divbox';
divbox.style.border = '1px solid #000000';
divbox.style.height = '5rem';
divbox.style.width = '5rem';
divbox.style.display = 'flex';
divbox.style.justifyContent = 'center';
divbox.style.alignItems = 'center';


// if columns, then element appended to, changes
// thus, the appending line - parameter - needs to accomodate that
// else, you end up with a code block that you cannot easily iterate, do you not?

// body.appendChild(divbox); whenever this isn't a parameter - the codeblock is stiff in that regard
// whenever it is, the code is flexible but a brick of complexity is added


let elAppendedTo = body;
function appendDivbox() {
  const divbox2 = document.createElement('div');
  elAppendedTo.appendChild(divbox2);

  divbox2.innerText = 'divbox2';
  divbox2.style.border = '1px solid #000000';
  divbox2.style.height = '5rem';
  divbox2.style.width = '5rem';
  divbox2.style.display = 'flex';
  divbox2.style.justifyContent = 'center';
  divbox2.style.alignItems = 'center';
}

const runFuncManyx = (count, rFunc) => {
  [...new Array(count).fill(null)].forEach(() => {
    rFunc();
  });
}

// The concept of AUTOMATED DIRECTION
// once automated well, you can do an instance, what otherwise would take hours - in the automated direction
runFuncManyx(10, appendDivbox);

// code -> func -> iterator of the func -> iterator of the iterator of the func

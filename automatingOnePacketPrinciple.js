const body = document.getElementsByTagName('body')[0];
const col = document.createElement('div');
const row = document.createElement('div');
col.appendChild(row);
body.appendChild(col);

// do you see how that's a one packet? 
// do you see how you want to automate one such packet, then automate creating that?
// do you see how you try to automate "part between", then "other part", you miss the relationships? how suddenly, variables are missing, and you need to fill that, and so on?


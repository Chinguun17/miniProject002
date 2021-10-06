const buttonValue = document.querySelectorAll('button')
const screenValue = document.querySelector('#display')

let isOperator;
let isNumber;
let isDot;

function refreshing() {
  isOperator = true;
  isNumber = true;
  isDot = false;
  screenValue.value = "0";
}

refreshing();

buttonValue.forEach(element => 
  element.addEventListener('click', e => {

  let buttonText = e.target.innerHTML;

  if (buttonText === "C") {
    refreshing();
  } 
  else if (buttonText === "." && !isDot) {
    screenValue.value += buttonText;
    isDot = true;
    
  }

  else if (buttonText === "+" && isOperator) {
    if (screenValue.value != "0") {
      screenValue.value += buttonText;
    } else {
      screenValue.value = buttonText;
      }
    isOperator = false;
    isDot = false; 
    isNumber = true;
  }

  else if (buttonText === "-" && isOperator) {
    if (screenValue.value != "0") {
      screenValue.value += buttonText;
    } else {
      screenValue.value = buttonText;
      }
    isOperator = false;
    isDot = false; 
    isNumber = true;
  }
  
  else if (buttonText === "/" && isOperator) {
    if (screenValue.value != "0") {
      screenValue.value += buttonText; 
      isOperator = false;
      isDot = false;
      isNumber = true;
    }
  }

  else if (buttonText === "*" && isOperator) {
    if (screenValue.value != "0") {
      screenValue.value += buttonText; 
      isOperator = false;
      isDot = false;
      isNumber = true;
    }
  }
  
  else if (buttonText >= "0" && buttonText <= "9" && isNumber) {

    if (buttonText === "0" && screenValue.value === "0") {
      isNumber = true;
    }
    else if (screenValue.value != "0") {
      screenValue.value += buttonText; 
    }
    else {
      screenValue.value = buttonText;
    }

    isOperator = true;
  }

  else if (buttonText === "=" ) {
    screenValue.value = eval(screenValue.value);
    isNumber = false;

  }





}));


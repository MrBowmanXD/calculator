const display = document.querySelector('.display');
const btnNumber = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const arrayBtnsNumbers = [...btnNumber];
const arrayOperators = [...operators];

function add(a, b) {
  display.textContent = a + b;
}

function subtract(a, b) {
  display.textContent = a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
}
function divide(a, b) {
  display.textContent = a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      add(a, b);
      break;
    case '-':
      subtract(a, b);
      break;
    case '*':
      multiply(a, b);
      break;
    case '/':
      divide(a, b);
      break;
    default:
      console.log('No such operator');
  }
}

var storedValue;
var operatorUsed;
var newValue;

arrayBtnsNumbers.forEach(function displayNumber(btn) {
  btn.addEventListener('click', () => {
    if (
      display.textContent === '+' ||
      display.textContent === '-' ||
      display.textContent === '*' ||
      display.textContent === '/'
    ) {
      display.textContent = '';
    }

    if (operatorUsed != undefined) {
      if (newValue != undefined) {
        display.textContent += btn.textContent;
        newValue = parseInt(display.textContent);
        return;
      }

      if (storedValue && operatorUsed != '') {
        display.textContent += btn.textContent;
        newValue = parseInt(display.textContent);
        return;
      }
    }

    if (display.textContent != '') {
      display.textContent += btn.textContent;
      storedValue = parseInt(display.textContent);
    } else {
      display.textContent = btn.textContent;
      storedValue = display.textContent;
    }
  });
});

arrayOperators.forEach((operator) => {
  operator.addEventListener('click', function ChoseOperator() {
    if (operator.textContent == '+') {
      operatorUsed = '+';
      display.textContent = '+';
      return;
    }

    if (operator.textContent == '-') {
      operatorUsed = '-';
      display.textContent = '-';
      return;
    }

    if (operator.textContent == '*') {
      operatorUsed = '*';
      display.textContent = '*';
      return;
    }

    if (operator.textContent == '/') {
      operatorUsed = '/';
      display.textContent = '/';
      return;
    }
  });
});

equals.addEventListener('click', function () {
  operate(operatorUsed, storedValue, newValue);
});

function reset() {
  storedValue = undefined;
  operatorUsed = undefined;
  newValue = undefined;
  display.textContent = '';
}

clear.addEventListener('click', () => {
  reset();
});

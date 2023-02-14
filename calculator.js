const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')


let calculation = []
let accumulativeCalculation

function processInput(btn) {
  const value = btn.textContent;

  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    performCalculation();
  } else if (isOperator(value)) {
    performCalculation();
    calculation.push(value);
  } else {
    calculation.push(value);
    screenDisplay.textContent = calculation.join("");
  }
}

function performCalculation() {
  let expression = calculation.join("");
  let result;
  try {
    result = eval(expression);
    if (isFinite(result)) {
      screenDisplay.textContent = result;
      calculation = [result];
    } else {
      screenDisplay.textContent = "Error: Division by zero";
      calculation = [];
    }
  } catch (e) {
    screenDisplay.textContent = "Error: Invalid expression";
    calculation = [];
  }
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}


buttons.forEach(btn => btn.addEventListener('click', () => processInput(btn)))

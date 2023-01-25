const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumulativeCalculation

function calculate(btn) {
  const value = btn.textContent
  if (value === "CLEAR") {
    calculation = []
    screenDisplay.textContent = "0"
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation)
  } else {
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = accumulativeCalculation
  }
}

buttons.forEach(btn => btn.addEventListener('click', () => calculate(btn)))

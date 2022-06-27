const display = document.querySelector('.display-content')
const operations = document.querySelector('.operations')
const backZeroButton = document.querySelector('.back-zero-button')

const sum = (number1, number2) => number1 + number2

const subtraction = (number1, number2) => number1 - number2

const multiplication = (number1, number2) => number1 * number2

const division = (number1, number2) => number1 / number2

const squareRoot = (number) => Math.sqrt(number)

const isSum = sum(10, 2)
const isSubtraction = subtraction(10, 2)
const isMultiplication = multiplication(10, 2)
const isDivision = division(10, 2)
const isSquareRoot = squareRoot(9)

operations.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.innerText === '+') {
    display.textContent = isSum
  }

  if (clickedElement.innerText === '-') {
    display.textContent = isSubtraction
  }

  if (clickedElement.innerText === 'x') {
    display.textContent = isMultiplication
  }

  if (clickedElement.innerText === '÷') {
    display.textContent = isDivision
  }

  if (clickedElement.innerText === '√') {
    display.textContent = isSquareRoot
  }
})

backZeroButton.addEventListener('click', () => {
  display.textContent = '0'
})



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        
        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;

        default:
            result = null;
    }
    return result;
}

function show(display, item) {
    display.textContent += item;
}

function getSecondNumber(displayContent) {
    const operators = ['+', '-', '*', '/'];
    let index;
    for (let i = 0; i < operators.length; i++) {
        for (let j = 0; j < displayContent.length; j++) {
            if (displayContent[i] === operators[j]) {
                index = i;
            }
        }
    }
    const secondNumber = displayContent.slice(index + 1);
    return secondNumber;
}

const display = document.querySelector('#display');
let firstNumber,
    operator,
    secondNumber,
    result,
    buttonClicked = false; // This variable makes sure that only one operation button is pressed at a time

document.querySelectorAll('#numbers button').forEach(button => {
    button.addEventListener('click', () => {
        show(display, button.textContent);
    })
});

document.querySelectorAll('#operations button').forEach(button => {
    button.addEventListener('click', () => {
        if (!buttonClicked) {
            firstNumber = display.textContent;
            show(display, button.textContent);
            operator = button.textContent;
            console.log(operator);
            buttonClicked = true;
        }
    })
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    secondNumber = getSecondNumber(display.textContent);
    show(display, '=')
    result = operate(+firstNumber, operator, +secondNumber);
    show(display, result);
});    
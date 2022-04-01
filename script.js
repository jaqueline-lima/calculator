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
    return a/b;
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
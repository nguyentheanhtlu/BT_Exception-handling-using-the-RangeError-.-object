function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else {
        throw new RangeError('The operator must be an +,-,*,/');
    }
    return result;
}


    try {
        calculator(3, 9, '?');
    } catch (e) {
        console.log(e.message);
    }


function mathOperations(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        case "%": result = firstNumber % secondNumber; break;
        case "**": result = firstNumber ** secondNumber; break;
    }
    if (result!=0){
        console.log(result) 
    }
}

mathOperations(3, 5.5, '*')
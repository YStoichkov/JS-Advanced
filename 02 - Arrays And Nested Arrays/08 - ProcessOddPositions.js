function processOddNumbers(arguments) {
    let result = [];
    for (let i = 1; i < arguments.length; i += 2) {
        result.unshift(Number(arguments[i]) * 2)
    }
    console.log(result)
}
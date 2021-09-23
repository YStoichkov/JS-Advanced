function aggregateElements(arguments) {
    let sum = 0
    let otherSum = 0
    let concatenated = ''
    for (let i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i])
        otherSum += 1 / arguments[i]
        concatenated += arguments[i]
    }
    console.log(sum + '\n' + otherSum + '\n' + concatenated)
}
aggregateElements([1, 2, 3])
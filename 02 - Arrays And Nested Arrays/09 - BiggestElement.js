function biggestElement(matrix) {
    let answer = []
    for (let i = 0; i < matrix.length; i++) {
        answer.push(Math.max(...matrix[i]))
    }
    answer.sort((a, b) => a - b);
    let result = answer[answer.length - 1];
    return result;
}
console.log(biggestElement([[20, 50, 10], [8, 33, 145]]))
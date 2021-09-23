function sort(arguments) {
    let result = []
    arguments = arguments.sort(function (a, b) {
        return a - b;
    });
    if (result.length % 2 == 0) {
        result = arguments.slice(arguments.length / 2, arguments.length)
    }
    else {
        let startIndex = Math.floor(result.length / 2);
        result = arguments.slice(startIndex)
    }
    return result
}
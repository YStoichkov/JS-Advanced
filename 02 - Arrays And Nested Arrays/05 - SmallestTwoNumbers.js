function smallestNumbers(arguments) {
    console.log(arguments.sort((a, b) => a - b).slice(0, 2));
}
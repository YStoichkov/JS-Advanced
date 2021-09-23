function largestNumber(...args) {
    args.sort((a, b) => a - b);
    console.log(`The largest number is ${args[args.length - 1]}.`)
}

largestNumber(-3, -5, -22.5);
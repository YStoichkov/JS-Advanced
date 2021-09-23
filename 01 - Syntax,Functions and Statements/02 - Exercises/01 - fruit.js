function fruit(...args) {
    console.log(`I need $${((Number(args[1]) * Number(args[2])/1000).toFixed(2))} to buy ${(Number(args[1]) / 1000).toFixed(2)} kilograms ${args[0]}.`)
}

fruit('orange', 2500, 1.80)
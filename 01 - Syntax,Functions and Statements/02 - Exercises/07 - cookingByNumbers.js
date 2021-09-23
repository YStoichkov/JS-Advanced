function cookingByNumbers(...args) {
    let result = Number(args[0])
    for (let i = 1; i < args.length; i++) {
        switch (args[i]) {
            case "chop": result /= 2; break;
            case "dice": result = Math.sqrt(result); break;
            case "spice": result += 1; break;
            case "bake": result *= 3; break;
            case "fillet": result = result - (result * 0.2); break;
            default: break;
        }
        console.log(result)
    }
}
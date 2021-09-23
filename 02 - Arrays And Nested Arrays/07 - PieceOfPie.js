function solve(arguments,startFlavour,endFlavour){
    let startIndex = arguments.indexOf(startFlavour);
    let endIndex = arguments.indexOf(endFlavour);
    
    let result = arguments.slice(startIndex,endIndex+1);

    return result
}
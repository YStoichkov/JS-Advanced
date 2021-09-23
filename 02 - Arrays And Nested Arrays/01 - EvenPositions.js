function evenPositions (arguments){
  let result = ''
  for (let i = 0; i < arguments.length; i+=2) {
      result += arguments[i] + ' '
  }
   console.log(result.trim())
}

function sameNumbers (numbers){
    var digits = (""+numbers).split("");
    digits = digits.sort();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum+=parseInt(digits[i]);
    }
    let biggestNumber=digits[digits.length-1];
    let smallestNumber=digits[0];
    if (biggestNumber==smallestNumber){
        console.log(true);
        console.log(sum);
    }
    else {
        console.log(false);
        console.log(sum);
    }
}
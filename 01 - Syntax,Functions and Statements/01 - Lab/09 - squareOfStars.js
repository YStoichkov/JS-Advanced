function squareOfStars(params) {
    let arr = [];
    if (params == undefined) {
        for (let j = 0; j < 5; j++) {
            arr.push('* '.repeat(5));
        }
    }
    else {
        for (let i = 0; i < params; i++) {
            arr.push('* '.repeat(params));

        }
    }
    arr.forEach((element) => console.log(element));
}
squareOfStars(5);
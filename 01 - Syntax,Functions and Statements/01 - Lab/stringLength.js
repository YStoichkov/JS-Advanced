function stringLength(...args) {
    let result = 0;
    args.forEach(el => result += el.length);
    console.log(result + '\n' + Math.floor(result / 3));
}

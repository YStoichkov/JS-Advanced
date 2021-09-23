function negativePositiveNumbers(elements) {
    let result = [];

    for (let i = 0; i < elements.length; i++) {

        if (elements[i] < 0) {
            result.unshift(elements[i]);

        } else {
            result.push(elements[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}
function previousDay(...args) {
    const date = new Date(args[0], args[1], args[2] - 1);
    const yesterday = new Date(date)

    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
}

previousDay(2016, 10, 1)
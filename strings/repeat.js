function repeat(num, str) {
    let reps = ''; // empty string

    while (num > 0) {
        reps += str;
        num -= 1;
    }

    return reps;
}


console.log(repeat(3, 'ha'));

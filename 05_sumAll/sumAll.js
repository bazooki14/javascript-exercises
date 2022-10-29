const sumAll = function(first, last) {
    let sum;
    if (first > last) {
        let initial = first;
        let final = last;
        for (let i = initial; i <= final; i++) {
            sum += i;
        };
    } else if (first < last) {
        let initial = last;
        let final = first;
        for (let i = initial; i <= final; i++) {
            sum += i;
        };
    } else if (first < 0 || last < 0 || first.isNaN() || last.isNaN() ) {
        sum = 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

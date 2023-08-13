const fibonacci = function(place) {
    parseInt(place);

    if (place < 0) {
        return "OOPS"
    };
    
    let fib = [1, 1];

    fibber = fib[fib.length - 2];

    for (let i = 0; i < 26; i++) {
        fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
    };

    return fib[place - 1];
};

// Do not edit below this line
module.exports = fibonacci;

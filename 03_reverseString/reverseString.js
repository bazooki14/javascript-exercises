const reverseString = function(string) {
    let returnString = '';
    let i = 1;
    while (i <= string.length) {
        returnString += string.charAt(string.length - i);
        i++;
    };
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;

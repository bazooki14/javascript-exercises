const palindromes = function (maybe) {
    let may = maybe.trim()
                   .toLowerCase()
                   .replaceAll('!', '')
                   .replaceAll(',', '')
                   .replaceAll('.', '')
                   .replaceAll(' ', '');
    
    let array = may.split("");

    let revArray = [...array];

    revArray.reverse();
    
    let arrayString = array.toString();
    
    let revArrayString = revArray.toString();


    if (arrayString === revArrayString) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;

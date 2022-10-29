const removeFromArray = function(array, ...toRemove) {
    let argArray = [...toRemove];
    for (arg of argArray) {
        for (piece of array) {
            if (arg === piece) {
                ind = array.indexOf(piece);
                array.splice(ind, 1);
            } else {
                continue;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

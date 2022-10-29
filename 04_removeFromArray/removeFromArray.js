const removeFromArray = function(array, ...toRemove) {
    let argArray = [...toRemove]
    let cleanArray = array.filter(cleaner);
    function cleaner(testee) {
        for (let i = 0; i < argArray.length; i++) {
            if (testee === argArray[i]) {continue}
            else {
                return testee;
            }
        }
    }
    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;

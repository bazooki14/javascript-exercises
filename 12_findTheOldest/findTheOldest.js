const findTheOldest = function(people) {
    let oldest = people.sort(function(a, b) {
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (b.yearOfDeath == undefined) {
            b.yearOfDeath = new Date().getFullYear();
        };
        
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

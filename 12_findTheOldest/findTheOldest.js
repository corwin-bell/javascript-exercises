const findTheOldest = function(peopleArray) {
    peopleArray.forEach((person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    const ageArray = peopleArray.map(person => person.yearOfDeath - person.yearOfBirth);
    const maxAge = Math.max(...ageArray);
    const oldestPerson = peopleArray[ageArray.indexOf(maxAge)];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

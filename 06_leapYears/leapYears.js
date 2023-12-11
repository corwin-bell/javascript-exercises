// determine whether a given year is a leap year
// years divisible by 400 are always leap years
// otherwise, years divisible by 4 and not divisible by 100 are leap years
const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else {return false;}
};

// Do not edit below this line
module.exports = leapYears;

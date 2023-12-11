// determine whether a given year is a leap year
// years divisible by 400 are always leap years
// otherwise, years divisible by 4 and not divisible by 100 are leap years
const leapYears = function(year) {
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)
};

// Do not edit below this line
module.exports = leapYears;

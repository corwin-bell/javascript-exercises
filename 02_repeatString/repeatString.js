const repeatString = function(string,repeatNum) {
    let reString = string;
    for (let i = 1; i <repeatNum; i++) {
        reString += string;
    }
    return reString;
};

// Do not edit below this line
module.exports = repeatString;

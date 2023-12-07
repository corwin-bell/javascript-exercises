const repeatString = function(string,repeatNum) {
    if (repeatNum < 0) {
        return 'ERROR';
    }
    else {
        let reString = '';
        for (let i = 1; i <=repeatNum; i++) {
            reString += string;
        }
        return reString;
    }
};

// Do not edit below this line
module.exports = repeatString;

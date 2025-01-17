const sumAll = function(int1,int2) {
    if (int1 < 0 || 
        int2 < 0 || 
        !Number.isInteger(int1) || 
        !Number.isInteger(int2)
        ) {
        return 'ERROR';
    }
    intArray = [int1,int2].sort((a, b) => a - b);
    intArray
    let intSum = 0;
    for (let i = intArray[0]; i <= intArray[1]; i++) {
        intSum += i;
    }
    return intSum;
};
// Do not edit below this line
module.exports = sumAll;

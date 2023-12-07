// accepts variable number and type of arguments
const removeFromArray = function(array, ...args) {
    // only remove items that are present in the array
    for (let arg of args) {
        if (arg in array) {
            let index = array.indexOf(arg);
            array.splice(index,1);
        }
        else {
            continue;
        }
    return array;
    } 
    // return the array

};

// Do not edit below this line
module.exports = removeFromArray;

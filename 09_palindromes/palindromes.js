const palindromes = function (string) {
    const cleanString = string.replace(/\W/g, '').toLowerCase();
    return cleanString === [...cleanString].reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

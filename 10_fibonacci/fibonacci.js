const fibonacci = function(number) {
    if (number < 0) return 'OOPS';
    let fibNumber1 = 1;
    let fibNumber2 = 1;
    let fibNumber3 = 1;
    if (number >= 1 && number <= 2) {
        return fibNumber3;
    }
    for (let i = 3; i <=number; i++) {
        fibNumber3 = fibNumber1 + fibNumber2;
        fibNumber1 = fibNumber2;
        fibNumber2 = fibNumber3;
    }
    return fibNumber3;
};

// how to test performance
// const start = performance.now();
// await fibonacci(5);
// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);

// Do not edit below this line
module.exports = fibonacci;

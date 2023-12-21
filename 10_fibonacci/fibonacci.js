const fibonacci = function(count) {
    if (count < 0) return 'OOPS';
    if (count === 0) return 0;
    let fibcount1 = 1;
    let fibcount2 = 1;
    if (count > 2) {
        for (let i = 3; i <=count; i++) {
            let fibcount3 = fibcount1 + fibcount2;
            fibcount1 = fibcount2;
            fibcount2 = fibcount3;
        }
    }
    return fibcount2;
};

// how to test performance
// const start = performance.now();
// await fibonacci(5);
// const end = performance.now();
// const executionTime = end - start;
// executionTime
// console.log(`Execution time: ${end - start} ms`);

// Do not edit below this line
module.exports = fibonacci;

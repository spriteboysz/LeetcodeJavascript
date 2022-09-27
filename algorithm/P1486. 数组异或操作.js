/*
 * Author: Deean
 * Date: 2022-09-27 22:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= (start + 2 * i);
    }
    return xor;
};

console.log(xorOperation(n = 4, start = 3));
console.log(xorOperation(n = 1, start = 7));
console.log(xorOperation(n = 10, start = 5));

/*
 * Author: Deean
 * Date: 2022/12/17 21:49
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    for (let i = 1; i <= n; i++) {
        if (2 * i * i === n * n + n) {
            return i;
        }
    }
    return -1;
};

console.log(pivotInteger(8));
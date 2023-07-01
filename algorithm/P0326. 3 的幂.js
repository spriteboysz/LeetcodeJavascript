/*
 * Author: Deean
 * Date: 2023-07-01 10:45
 * FilePath: algorithm
 * Description:326. 3 的幂
 */


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};

console.log(isPowerOfThree(27));
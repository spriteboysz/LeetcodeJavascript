/*
 * Author: Deean
 * Date: 2023-07-01 10:42
 * FilePath: algorithm
 * Description:263. 丑数
 */


/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false;
    for (const num of [2, 3, 5]) {
        while (n % num === 0) {
            n /= num;
        }
    }
    return n === 1;
};

console.log(isUgly(6));
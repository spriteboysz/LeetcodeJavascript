/*
 * Author: Deean
 * Date: 2023-08-13 18:38
 * FilePath: algorithm
 * Description:397. 整数替换
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    if (n === 1) return 0;
    if (n % 2 === 0) {
        return 1 + integerReplacement(Math.floor(n / 2));
    }
    return 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.ceil(n / 2)));
};

console.log(integerReplacement(7));
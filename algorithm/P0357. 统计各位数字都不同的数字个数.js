/*
 * Author: Deean
 * Date: 2023-08-10 23:19
 * FilePath: algorithm
 * Description:357. 统计各位数字都不同的数字个数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 10;
    let ret = 10, cur = 9;
    for (let i = 0; i < n - 1; i++) {
        cur *= 9 - i;
        ret += cur;
    }
    return ret;
};

console.log(countNumbersWithUniqueDigits(2));
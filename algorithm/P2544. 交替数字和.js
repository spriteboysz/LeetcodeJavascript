/*
 * Author: Deean
 * Date: 2023-02-27 21:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let sum = 0, flag = 1, s = n + "";
    for (let i = 0; i < s.length; i++) {
        sum += s[i] * 1 * flag;
        flag *= -1;
    }
    return sum;
};

console.log(alternateDigitSum(521));
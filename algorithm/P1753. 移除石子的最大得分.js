/*
 * Author: Deean
 * Date: 2023-07-07 23:14
 * FilePath: algorithm
 * Description:1753. 移除石子的最大得分
 */


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
    let sum = a + b + c;
    let maxVal = Math.max(Math.max(a, b), c);
    return Math.min(sum - maxVal, Math.floor(sum / 2));
};

console.log(maximumScore(a = 2, b = 4, c = 6));
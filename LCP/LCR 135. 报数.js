/*
 * Author: Deean
 * Date: 2023-10-08 23:27
 * FilePath: LCP
 * Description: LCR 135. 报数
 */

/**
 * @param {number} cnt
 * @return {number[]}
 */
var countNumbers = function (cnt) {
    let nums = [];
    for (let i = 1; i < Math.pow(10, cnt); i++) {
        nums.push(i);
    }
    return nums;
};

console.log(countNumbers(2));
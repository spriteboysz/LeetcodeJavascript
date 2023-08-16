/*
 * Author: Deean
 * Date: 2023-08-15 23:09
 * FilePath: algorithm
 * Description:2815. 数组中的最大数对和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let digits = new Array(10);
    for (let i = 0; i < 10; i++) {
        digits[i] = [];
    }
    for (const num of nums) {
        let key = parseInt(num.toString().split("").sort((a, b) => b - a)[0]);
        digits[key].push(num);
    }
    digits.map(item => item.sort((a, b) => b - a))
    let maximum = -1;
    for (const digit of digits) {
        if (digit.length < 2) continue;
        maximum = Math.max(maximum, digit[0] + digit[1]);
    }
    return maximum;
};

console.log(maxSum(nums = [51, 71, 17, 24, 42]));
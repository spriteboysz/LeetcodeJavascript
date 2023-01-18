/*
 * Author: Deean
 * Date: 2023/1/18 21:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0, sum2 = 0;
    for (const num of nums) {
        sum1 += num;
        for (const c of num.toString()) {
            sum2 += c.charCodeAt(0) - '0'.charCodeAt(0);
        }
    }
    return Math.abs(sum1 - sum2);
};

console.log(differenceOfSum(nums = [1, 15, 6, 3]));
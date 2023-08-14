/*
 * Author: Deean
 * Date: 2023-08-13 22:49
 * FilePath: algorithm
 * Description:2778. 特殊元素平方和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let sum = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        if (n % (i + 1) === 0) {
            sum += nums[i] ** 2;
        }
    }
    return sum;
};

console.log(sumOfSquares(nums = [2, 7, 1, 19, 18, 3]));
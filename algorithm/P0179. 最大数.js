/*
 * Author: Deean
 * Date: 2023-08-08 23:43
 * FilePath: algorithm
 * Description:179. 最大数
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()));
    if (nums[0] === 0) return '0';
    return nums.join("");
};

console.log(largestNumber(nums = [3, 30, 34, 5, 9]));
/*
 * Author: Deean
 * Date: 2022-09-28 21:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[1] * nums[0];
};

console.log(maxProductDifference(nums = [4, 2, 5, 9, 7, 4, 8]));
 
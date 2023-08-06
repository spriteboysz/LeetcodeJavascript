/*
 * Author: Deean
 * Date: 2023-08-06 09:18
 * FilePath: algorithm
 * Description:912. 排序数组
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    nums.sort((a, b) => a - b);
    return nums;
};

console.log(sortArray(nums = [5, 1, 1, 2, 0, 0]));
/*
 * Author: Deean
 * Date: 2023-08-08 23:48
 * FilePath: algorithm
 * Description:154. 寻找旋转排序数组中的最小值 II
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    return Math.min(...nums);
};

console.log(findMin(nums = [2, 2, 2, 0, 1]));
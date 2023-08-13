/*
 * Author: Deean
 * Date: 2023-08-12 14:55
 * FilePath: algorithm
 * Description:153. 寻找旋转排序数组中的最小值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    return Math.min(...nums);
};

console.log(findMin(nums = [4, 5, 6, 7, 0, 1, 2]));
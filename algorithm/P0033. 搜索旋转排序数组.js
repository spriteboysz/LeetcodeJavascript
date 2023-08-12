/*
 * Author: Deean
 * Date: 2023-08-12 17:43
 * FilePath: algorithm
 * Description:33. 搜索旋转排序数组
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
};

console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0));
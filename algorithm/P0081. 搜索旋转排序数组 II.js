/*
 * Author: Deean
 * Date: 2023-08-12 14:22
 * FilePath: algorithm
 * Description:81. 搜索旋转排序数组 II
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    for (const num of nums) {
        if (num === target) {
            return true;
        }
    }
    return false;
};

console.log(search(nums = [2, 5, 6, 0, 0, 1, 2], target = 0));
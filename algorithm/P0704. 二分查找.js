/*
 * Author: Deean
 * Date: 2023-07-02 17:52
 * FilePath: algorithm
 * Description:704. 二分查找
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return nums.indexOf(target);
};

console.log(search(nums = [-1, 0, 3, 5, 9, 12], target = 10));
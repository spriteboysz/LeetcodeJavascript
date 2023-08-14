/*
 * Author: Deean
 * Date: 2023-08-13 22:45
 * FilePath: algorithm
 * Description:2784. 检查数组是否是好的
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, n = nums.length; i < n - 1; i++) {
        if (nums[i] !== i + 1) {
            return false;
        }
    }
    return nums[nums.length - 1] === nums.length - 1;
};

console.log(isGood(nums = [1, 3, 3, 2]));
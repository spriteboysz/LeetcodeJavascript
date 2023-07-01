/*
 * Author: Deean
 * Date: 2023-06-30 22:44
 * FilePath: algorithm
 * Description:219. 存在重复元素 II
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = i + 1; j < i + k + 1; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate(nums = [1, 2, 3, 1], k = 3));
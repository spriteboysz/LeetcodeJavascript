/*
 * Author: Deean
 * Date: 2023-08-12 10:30
 * FilePath: algorithm
 * Description:674. 最长连续递增序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let maximum = 1, start = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        if (nums[i] <= nums[i - 1]) {
            start = i;
        }
        maximum = Math.max(maximum, i - start + 1);
    }
    return maximum;
};

console.log(findLengthOfLCIS(nums = [1, 6, 5, 4, 7]));
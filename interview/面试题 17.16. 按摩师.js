/*
 * Author: Deean
 * Date: 2023-08-15 22:56
 * FilePath: interview
 * Description:面试题 17.16. 按摩师
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[n - 1];
};

console.log(massage([1, 2, 3, 1]));
/*
 * Author: Deean
 * Date: 2023-08-04 22:16
 * FilePath: algorithm
 * Description:643. 子数组最大平均数 I
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maximum = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maximum = Math.max(maximum, sum);
    }
    return maximum / k;
};

console.log(findMaxAverage(nums = [1, 12, -5, -6, 50, 3], k = 4));
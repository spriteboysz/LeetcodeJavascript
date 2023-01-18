/*
 * Author: Deean
 * Date: 2023/1/18 21:46
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    let minimum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length - k + 1; i++) {
        minimum = Math.min(minimum, nums[i + k - 1] - nums[i]);
    }
    return minimum;
};

console.log(minimumDifference(nums = [9,4,1,7], k = 2));
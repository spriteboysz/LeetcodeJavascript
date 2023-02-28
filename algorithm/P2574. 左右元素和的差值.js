/*
 * Author: Deean
 * Date: 2023-02-27 22:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    let n = nums.length;
    let left = Array(n).fill(0), right = Array(n).fill(0), diff = Array(n);
    for (let i = 0; i < n - 1; i++) {
        left[i + 1] = left[i] + nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        right[i - 1] = right[i] + nums[i];
    }
    for (let i = 0; i < n; i++) {
        diff[i] = Math.abs(left[i] - right[i]);
    }
    return diff;
};

console.log(leftRigthDifference(nums = [10, 4, 8, 3]));
/*
 * Author: Deean
 * Date: 2023-06-11 18:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let base = Math.max(...nums);
    return (base + base + k - 1) * k / 2;
};

console.log(maximizeSum(nums = [1, 2, 3, 4, 5], k = 3));
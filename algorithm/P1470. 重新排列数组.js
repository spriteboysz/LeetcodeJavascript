/*
 * Author: Deean
 * Date: 2022-09-27 23:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let nums2 = new Array(2 * n).fill(0);
    for (let i = 0; i < n; i++) {
        nums2[2 * i] = nums[i];
        nums2[2 * i + 1] = nums[n + i];
    }
    return nums2;
};

console.log(shuffle(nums = [1, 2, 3, 4, 4, 3, 2, 1], n = 4));
 
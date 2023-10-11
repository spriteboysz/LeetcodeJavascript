/*
 * Author: Deean
 * Date: 2023-10-08 22:49
 * FilePath: LCP
 * Description: LCR 076. 数组中的第 K 个最大元素
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], k = 2));
/*
 * Author: Deean
 * Date: 2022-10-03 16:46
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
 
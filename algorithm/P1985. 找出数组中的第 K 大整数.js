/*
 * Author: Deean
 * Date: 2023-08-13 09:28
 * FilePath: algorithm
 * Description:1985. 找出数组中的第 K 大整数
 */

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    nums.sort((a, b) => b.length - a.length || (b > a ? 1 : -1))
    return nums[k - 1]
};

console.log(kthLargestNumber(nums = ["2", "21", "12", "1"], k = 3));
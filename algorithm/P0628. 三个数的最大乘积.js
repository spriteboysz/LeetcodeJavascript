/*
 * Author: Deean
 * Date: 2023-07-02 17:57
 * FilePath: algorithm
 * Description:628. 三个数的最大乘积
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

console.log(maximumProduct(nums = [5, 1, 2, 3, 4]));
/*
 * Author: Deean
 * Date: 2023-08-12 15:11
 * FilePath: algorithm
 * Description:189. 轮转数组
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    k %= n;
    [...nums.slice(-k), ...nums.slice(0, -k)].forEach((num, i) => {
        nums[i] = num;
    });
    console.log(nums);
};

rotate(nums = [1, 2, 3, 4, 5, 6, 7], k = 3);
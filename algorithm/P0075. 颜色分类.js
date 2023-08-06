/*
 * Author: Deean
 * Date: 2023-08-06 19:01
 * FilePath: algorithm
 * Description:75. 颜色分类
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let arr = [...nums].sort();
    nums.length = 0;
    nums.push(...arr);
    console.log(nums);
};

sortColors(nums = [2, 0, 2, 1, 1, 0]);
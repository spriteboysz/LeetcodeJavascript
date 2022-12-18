/*
 * Author: Deean
 * Date: 2022/12/18 22:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            n--;
        }
    }
    console.log(nums);
};

moveZeroes(nums = [0, 1, 0, 3, 12]);
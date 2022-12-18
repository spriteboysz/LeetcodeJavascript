/*
 * Author: Deean
 * Date: 2022/12/18 17:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }
    let nums2 = new Array(nums.length).fill(0);
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums2[j++] = nums[i];
        }
    }
    return nums2;
};

console.log(applyOperations(nums = [1,2,2,1,1,0]));
/*
 * Author: Deean
 * Date: 2022-10-02 14:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};

console.log(createTargetArray(nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]));
 
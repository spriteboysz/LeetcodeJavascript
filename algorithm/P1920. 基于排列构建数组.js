/*
 * Author: Deean
 * Date: 2022-09-25 21:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let n = nums.length
    let target = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        target[i] = nums[nums[i]];
    }
    return target;
};

console.log(buildArray([5, 0, 1, 2, 3, 4]));
 
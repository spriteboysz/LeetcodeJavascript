/*
 * Author: Deean
 * Date: 2022-10-04 16:04
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maximum = nums[0], cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur += nums[i];
        } else {
            maximum = Math.max(maximum, cur);
            cur = nums[i];
        }
    }
    return Math.max(maximum, cur);
};

console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 10, 1]));

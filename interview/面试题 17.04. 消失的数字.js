/*
 * Author: Deean
 * Date: 2022-10-04 20:50
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    return n * (n + 1) / 2 - nums.reduce((a, b) => a + b);
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
 
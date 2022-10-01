/*
 * Author: Deean
 * Date: 2022-10-01 18:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
 
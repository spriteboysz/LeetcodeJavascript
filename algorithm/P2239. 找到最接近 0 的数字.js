/*
 * Author: Deean
 * Date: 2023-03-01 22:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    return nums.sort((a, b) =>
        Math.abs(a) === Math.abs(b) ? b - a : Math.abs(a) - Math.abs(b))[0];
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
/*
 * Author: Deean
 * Date: 2022-10-04 15:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map(item => item * item).sort((a, b) => a - b);
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
 
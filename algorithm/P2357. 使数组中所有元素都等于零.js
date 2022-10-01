/*
 * Author: Deean
 * Date: 2022-10-01 11:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    return new Set(nums.filter((num) => num !== 0)).size;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
 
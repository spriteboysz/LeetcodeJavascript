/*
 * Author: Deean
 * Date: 2022-09-25 22:39
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    return [...nums, ...nums]
};

console.log(getConcatenation(nums = [1, 3, 2, 1]));
 
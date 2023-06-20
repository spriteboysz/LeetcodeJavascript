/*
 * Author: Deean
 * Date: 2023-06-19 23:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    nums.sort((a, b) => ("" + a + b) - ("" + b + a));
    return nums.join("");
};
console.log(minNumber([3, 30, 34, 5, 9]));
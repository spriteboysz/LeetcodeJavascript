/*
 * Author: Deean
 * Date: 2023-02-26 22:41
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    return nums.join("").split("").map(v => +v);
};

console.log(separateDigits(nums = [13, 25, 83, 77]));
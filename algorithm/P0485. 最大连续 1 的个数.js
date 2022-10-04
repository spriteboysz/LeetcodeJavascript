/*
 * Author: Deean
 * Date: 2022-10-04 21:00
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    return Math.max(...nums.join("").split("0").map(item => item.length));
};

console.log(findMaxConsecutiveOnes([1, 0, 0, 1, 1, 0, 1]));
 
/*
 * Author: Deean
 * Date: 2022-10-02 19:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums.sort((a, b) => b - a)
        .filter((_, i) => i % 2 === 1)
        .reduce((a, b) => a + b);
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
 
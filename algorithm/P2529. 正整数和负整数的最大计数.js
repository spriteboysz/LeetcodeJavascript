/*
 * Author: Deean
 * Date: 2023/1/14 21:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let positive = 0, negative = 0;
    for (const num of nums) {
        if (num > 0) {
            positive++;
        }
        if (num < 0) {
            negative++;
        }
    }
    return Math.max(positive, negative);
};

console.log(maximumCount(nums = [-3, -2, -1, 0, 0, 1, 2]));
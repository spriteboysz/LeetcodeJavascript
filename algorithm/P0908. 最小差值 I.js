/*
 * Author: Deean
 * Date: 2022-10-01 11:37
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let max = 0, min = 10001;
    for (const num of nums) {
        max = Math.max(num, max);
        min = Math.min(num, min);
    }
    return Math.max(0, max - min - 2 * k);
};

console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3, 6], 3));

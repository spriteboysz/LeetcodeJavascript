/*
 * Author: Deean
 * Date: 2023/1/11 23:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }
    return -1;
};

console.log(smallestEqual([4, 3, 2, 1]));
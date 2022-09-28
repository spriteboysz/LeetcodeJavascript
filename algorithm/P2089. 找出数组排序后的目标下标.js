/*
 * Author: Deean
 * Date: 2022-09-28 23:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let indices = [];
    nums.sort((a, b) => a - b);
    nums.forEach((num, i) => {
        if (num === target) {
            indices.push(i);
        }
    });
    return indices;
};

console.log(targetIndices(nums = [1, 2, 5, 2, 3], target = 5));
console.log(targetIndices(nums = [1, 2, 5, 2, 3], target = 7));

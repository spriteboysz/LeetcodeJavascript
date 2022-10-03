/*
 * Author: Deean
 * Date: 2022-10-03 19:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const set = new Set(nums);
    return new Array(nums.length).fill(0)
        .map((_, i) => i + 1)
        .filter((num) => !set.has(num));
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
 
/*
 * Author: Deean
 * Date: 2022-10-01 12:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    let set = new Set(nums);
    while (true) {
        if (set.has(original)) {
            original *= 2;
        } else {
            return original;
        }
    }
};

console.log(findFinalValue(nums = [5, 3, 6, 1, 12], 3));
 
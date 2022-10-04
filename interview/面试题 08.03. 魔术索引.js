/*
 * Author: Deean
 * Date: 2022-10-04 15:26
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    for (const [i, num] of nums.entries()) {
        if (num === i) return i;
    }
    return -1;
};

console.log(findMagicIndex([0, 2, 3, 4, 5]));
console.log(findMagicIndex([1, 1, 1]));

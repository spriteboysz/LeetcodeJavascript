/*
 * Author: Deean
 * Date: 2022-10-03 10:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === nums.length / 2)[0];
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
 
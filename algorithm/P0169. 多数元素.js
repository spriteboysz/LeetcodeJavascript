/*
 * Author: Deean
 * Date: 2022-10-03 10:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].find((num) => map.get(num) > nums.length / 2);
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
 
/*
 * Author: Deean
 * Date: 2022-10-03 15:16
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
 
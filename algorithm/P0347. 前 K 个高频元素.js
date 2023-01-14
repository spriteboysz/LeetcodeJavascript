/*
 * Author: Deean
 * Date: 2023/1/13 23:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    let map2 = new Map([...map].sort((a, b) => b[1] - a[1]));
    let result = [];
    for (let i = 0; i < k; i++) {
        result[i] = [...map2][i][0];
    }
    return result;
};

console.log(topKFrequent(nums = [1, 1, 1, 2, 2, 3], k = 2));
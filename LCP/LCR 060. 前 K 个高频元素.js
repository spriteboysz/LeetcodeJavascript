/*
 * Author: Deean
 * Date: 2023-10-08 22:22
 * FilePath: LCP
 * Description: LCR 060. 前 K 个高频元素
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

console.log(topKFrequent(nums = [1, 1, 1, 2, 2, 3], k = 2));
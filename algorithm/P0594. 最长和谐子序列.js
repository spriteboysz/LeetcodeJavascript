/*
 * Author: Deean
 * Date: 2023-07-01 11:40
 * FilePath: algorithm
 * Description:594. 最长和谐子序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num)||0) + 1);
    }
    let maximum = 0;
    for (const key of map.keys()) {
        if (map.has(key + 1)) {
            maximum = Math.max(maximum, map.get(key) + map.get(key + 1));
        }
    }
    return maximum;
};

console.log(findLHS(nums = [1,3,2,2,5,2,3,7]));
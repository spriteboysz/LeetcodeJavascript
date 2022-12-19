/*
 * Author: Deean
 * Date: 2022/12/18 23:28
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key && nums[i + 1]) {
            map.set(nums[i + 1], (map.get(nums[i + 1]) || 0) + 1);
        }
    }
    let maxVal = 0, maxCount = 0;
    for (const [k, v] of map) {
        if (v > maxCount) {
            maxVal = k;
            maxCount = v;
        }
    }
    return maxVal;
};

console.log(mostFrequent(nums = [1, 100, 200, 1, 100], key = 1));
/*
 * Author: Deean
 * Date: 2022-09-28 23:00
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    //console.log(map);
    let cnt = 0;
    for (let [, v] of map) {
        cnt += Math.floor(v / 2);
    }
    return [cnt, nums.length - cnt * 2];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
 
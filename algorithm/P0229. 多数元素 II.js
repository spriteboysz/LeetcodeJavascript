/*
 * Author: Deean
 * Date: 2023-08-06 17:16
 * FilePath: algorithm
 * Description:229. 多数元素 II
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let m = Math.floor(nums.length / 3);
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    let majority = [];
    map.forEach((v, k) => {
        if (v > m) {
            majority.push(k);
        }
    });
    return majority;
};

console.log(majorityElement(nums = [3, 2, 3]));
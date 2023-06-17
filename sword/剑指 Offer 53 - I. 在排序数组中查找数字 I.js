/*
 * Author: Deean
 * Date: 2023-06-16 21:55
 * FilePath: sword
 * Description:剑指 Offer 53 - I. 在排序数组中查找数字 I
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map.get(target) || 0;
};

console.log(search(nums = [5, 7, 7, 8, 8, 10], target = 1));
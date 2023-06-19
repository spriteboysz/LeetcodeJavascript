/*
 * Author: Deean
 * Date: 2023-06-18 22:29
 * FilePath: sword
 * Description:剑指 Offer II 070. 排序数组中只出现一次的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const num of nums) {
        if (map.get(num) === 1) return num;
    }
    return -1;
};

console.log(singleNonDuplicate(nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]));
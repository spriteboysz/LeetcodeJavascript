/*
 * Author: Deean
 * Date: 2023-10-08 22:41
 * FilePath: LCP
 * Description: LCR 070. 有序数组中的单一元素
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
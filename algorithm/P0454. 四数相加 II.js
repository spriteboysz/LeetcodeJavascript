/*
 * Author: Deean
 * Date: 2022-10-05 17:37
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map();
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            map.set(num1 + num2, (map.get(num1 + num2) || 0) + 1);
        }
    }

    let cnt = 0;
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            if (map.has(-num3 - num4)) {
                cnt += map.get(-num3 - num4);
            }
        }
    }
    return cnt;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
 
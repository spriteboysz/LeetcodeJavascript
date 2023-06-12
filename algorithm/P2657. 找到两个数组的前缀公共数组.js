/*
 * Author: Deean
 * Date: 2023-06-11 22:17
 * FilePath: algorithm
 * Description:2657. 找到两个数组的前缀公共数组
 */

/**
 * @return {number[]}
 * @param nums1
 * @param nums2
 */
var findThePrefixCommonArray = function (nums1, nums2) {
    let common = []
    let map = new Map();
    for (let i = 0, n = nums1.length; i < n; i++) {
        let cnt = 0;
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
        map.set(nums2[i], (map.get(nums2[i]) || 0) + 1);
        for (const value of map.values()) {
            if (value === 2) cnt += 1;
        }
        common.push(cnt);
    }
    return common;
};

console.log(findThePrefixCommonArray(nums1 = [1, 3, 2, 4], nums2 = [3, 1, 2, 4]));
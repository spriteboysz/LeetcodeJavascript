/*
 * Author: Deean
 * Date: 2023-06-30 22:33
 * FilePath: algorithm
 * Description:88. 合并两个有序数组
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
    console.log(nums1);
};

merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3);
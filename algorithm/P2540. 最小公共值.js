/*
 * Author: Deean
 * Date: 2023-02-27 23:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    for (let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
        if (nums1[i] > nums2[j]) {
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            return nums1[i];
        }
    }
    return -1;
};

console.log(getCommon(nums1 = [1, 2, 3], nums2 = [2, 4]));
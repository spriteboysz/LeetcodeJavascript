/*
 * Author: Deean
 * Date: 2023-08-06 11:24
 * FilePath: algorithm
 * Description:496. 下一个更大元素 I
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    nums2.forEach((num, i) => {
        map.set(num, i);
    });
    let m = nums1.length, n = nums2.length;
    let greater = new Array(m).fill(-1);
    nums1.forEach((num, i) => {
        for (let j = map.get(num); j < n; j++) {
            if (nums2[j] > num) {
                greater[i] = nums2[j];
                break;
            }
        }
    });
    return greater;
};

console.log(nextGreaterElement(nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]));
/*
 * Author: Deean
 * Date: 2022-10-04 17:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1), set2 = new Set(nums2);
    let arr1 = [], arr2 = [];
    for (const num of set1) {
        if (!set2.has(num)) arr1.push(num);
    }
    for (const num of set2) {
        if (!set1.has(num)) arr2.push(num);
    }
    return [arr1, arr2];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
 
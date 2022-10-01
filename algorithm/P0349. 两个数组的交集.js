/*
 * Author: Deean
 * Date: 2022-10-01 11:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1), set2 = new Set(nums2);
    return [...set1].filter((num) => {
        return set2.has(num);
    });
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
 
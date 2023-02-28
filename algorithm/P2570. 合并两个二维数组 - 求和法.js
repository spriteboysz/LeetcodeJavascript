/*
 * Author: Deean
 * Date: 2023-02-27 22:35
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map(), nums = [];
    for (const num of nums1) {
        map.set(num[0], (map.get(num[0]) | 0) + num[1]);
    }
    for (const num of nums2) {
        map.set(num[0], (map.get(num[0]) | 0) + num[1]);
    }
    for (const key of map.keys()) {
        nums.push([key, map.get(key)]);
    }
    nums.sort((a, b) => a[0] - b[0]);
    return nums;
};

console.log(mergeArrays(nums1 = [[1, 2], [2, 3], [4, 5]], nums2 = [[1, 4], [3, 2], [4, 1]]));
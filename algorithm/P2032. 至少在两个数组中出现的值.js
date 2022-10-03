/*
 * Author: Deean
 * Date: 2022-10-03 17:48
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let set1 = new Set(nums1), set2 = new Set(nums2), set3 = new Set(nums3);
    let set = new Set([...nums1, ...nums2, ...nums3]);
    const map = new Map();
    for (const num of set) {
        let value = 0;
        if (set1.has(num)) value |= 1;
        if (set2.has(num)) value |= 2;
        if (set3.has(num)) value |= 4;
        map.set(num, value);
    }
    return [...map.keys()].filter((num) => [3, 5, 6, 7].includes(map.get(num)));
};

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));

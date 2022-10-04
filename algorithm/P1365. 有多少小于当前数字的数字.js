/*
 * Author: Deean
 * Date: 2022-10-04 09:33
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let smaller = [], nums2 = Array.from(nums);
    nums2.sort((a, b) => a - b);
    let map = new Map();
    for (const [i, num] of nums2.entries()) {
        if (!map.has(num)) map.set(num, i);
    }
    for (const num of nums) {
        smaller.push(map.get(num));
    }
    return smaller;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));

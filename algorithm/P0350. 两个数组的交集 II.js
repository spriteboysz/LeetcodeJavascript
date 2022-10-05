/*
 * Author: Deean
 * Date: 2022-10-05 14:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let number1 = new Array(1001).fill(0);
    let number2 = new Array(1001).fill(0);
    for (const num of nums1) {
        number1[num]++;
    }
    for (const num of nums2) {
        number2[num]++;
    }
    let nums = [];
    for (let i = 1; i <= 1000; i++) {
        for (let j = 0; j < Math.min(number1[i], number2[i]); j++) {
            nums.push(i);
        }
    }
    return nums;
};

console.log(intersect([4, 4, 9, 5], [9, 4, 9, 8, 4]));
 
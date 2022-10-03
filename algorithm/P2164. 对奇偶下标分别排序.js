/*
 * Author: Deean
 * Date: 2022-10-03 15:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let even = [], odd = [];
    for (const [i, num] of nums.entries()) {
        if (i % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    let nums2 = [];
    for (let i = 0; i < even.length; i++) {
        nums2.push(even[i]);
        if (odd[i]) nums2.push(odd[i]);
    }
    return nums2;
};

console.log(sortEvenOdd([4, 1, 2, 3]));
console.log(sortEvenOdd([4, 1, 2, 3, 5]));

/*
 * Author: Deean
 * Date: 2023-06-30 23:17
 * FilePath: algorithm
 * Description:414. 第三大的数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let set = new Set();
    for (const num of nums) {
        set.add(num);
    }
    let nums2 = [];
    for (const num of set) {
        nums2.push(num);
    }
    if (nums2.length < 3) return Math.max(...nums2);
    nums2.sort((a, b) => b - a);
    return nums2[2];
};

console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([2, 2, 1]));
console.log(thirdMax([2, 2, 2]));
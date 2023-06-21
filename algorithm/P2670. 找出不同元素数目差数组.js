/*
 * Author: Deean
 * Date: 2023-06-20 23:44
 * FilePath: algorithm
 * Description:2670. 找出不同元素数目差数组
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    let diff = [];
    for (let i = 0, n = nums.length; i < n; i++) {
        let pref = new Set(nums.slice(0, i + 1)).size;
        let post = new Set(nums.slice(i + 1)).size;
        diff.push(pref - post);
    }
    return diff;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
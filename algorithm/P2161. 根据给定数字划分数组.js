/*
 * Author: Deean
 * Date: 2022-09-27 23:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let lt = [], gt = [], eq = [];
    for (const num of nums) {
        if (num < pivot) {
            lt.push(num);
        } else if (num > pivot) {
            gt.push(num);
        } else {
            eq.push(num);
        }
    }
    return [...lt, ...eq, ...gt];
};

console.log(pivotArray(nums = [-3, 4, 3, 2], pivot = 2));
 
/*
 * Author: Deean
 * Date: 2022/12/17 22:03
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutation = [];
    let backtrace = function (i, arr) {
        if (arr.length === nums.length) {
            permutation.push([...arr]);
            return;
        }
        for (let j = 0; j < nums.length; j++) {
            if (arr.indexOf(nums[j]) === -1) {
                backtrace(i+1, [...arr,nums[j]]);
            }
        }
    }
    backtrace(0, []);
    return permutation;

};

console.log(permute(nums = [1,2,3]));
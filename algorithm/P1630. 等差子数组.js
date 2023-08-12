/*
 * Author: Deean
 * Date: 2023-08-11 22:59
 * FilePath: algorithm
 * Description:1630. 等差子数组
 */

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    var check = function (nums) {
        if (nums.length <= 2) return true;
        nums.sort((a, b) => a - b)
        let diff = nums[1] - nums[0];
        for (let i = 1, n = nums.length; i < n; i++) {
            if (nums[i] - nums[i - 1] !== diff) {
                return false;
            }
        }
        return true;
    }
    
    let arithmetic = [];
    for (let i = 0, n = l.length; i < n; i++) {
        arithmetic.push(check(nums.slice(l[i], r[i] + 1)));
    }
    return arithmetic;
};

console.log(checkArithmeticSubarrays(nums = [4, 6, 5, 9, 3, 7], l = [0, 0, 2], r = [2, 3, 5]));
/*
 * Author: Deean
 * Date: 2022-09-26 22:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countKDifference(nums = [3, 2, 1, 5, 4], k = 2));
 
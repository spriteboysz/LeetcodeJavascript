/*
 * Author: Deean
 * Date: 2022-09-28 23:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countPairs(nums = [3, 1, 2, 2, 2, 1, 3], k = 2));
console.log(countPairs(nums = [1, 2, 3, 4], k = 1));

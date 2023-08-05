/*
 * Author: Deean
 * Date: 2023-08-03 22:58
 * FilePath: algorithm
 * Description:1005. K 次取反后最大化的数组和
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.sort((a, b) => {
            return a - b;
        });
        nums[0] = -nums[0];
    }
    let sum = 0;
    nums.map(a => {
        sum += a;
    })
    return sum;
};

console.log(largestSumAfterKNegations(nums = [4, 2, 3], k = 1));
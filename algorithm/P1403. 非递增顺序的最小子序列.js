/*
 * Author: Deean
 * Date: 2023-08-09 21:34
 * FilePath: algorithm
 * Description:1403. 非递增顺序的最小子序列
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    let sum = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    nums.sort((a, b) => a - b);
    let sequence = [];
    let acc = 0;
    for (let i = n - 1; i >= 0; i--) {
        acc += nums[i];
        sequence.push(nums[i]);
        if (sum - acc < acc) {
            break;
        }
    }
    return sequence;
};

console.log(minSubsequence(nums = [4, 3, 10, 9, 8]));
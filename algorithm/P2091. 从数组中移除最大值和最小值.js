/*
 * Author: Deean
 * Date: 2023-08-11 22:20
 * FilePath: algorithm
 * Description:2091. 从数组中移除最大值和最小值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    let n = nums.length;
    let [maxPos, minPos] = [nums.indexOf(Math.max(...nums)), nums.indexOf(Math.min(...nums))];
    let [left, right] = [Math.min(minPos, maxPos), Math.max(maxPos, minPos)];
    return Math.min(right + 1, n - left, 1 + left + n - right);
};

console.log(minimumDeletions(nums = [2, 10, 7, 5, 4, 1, 8, 6]));
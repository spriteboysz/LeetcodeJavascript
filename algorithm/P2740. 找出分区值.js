/*
 * Author: Deean
 * Date: 2023-08-06 19:29
 * FilePath: algorithm
 * Description:2740. 找出分区值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
    nums.sort((a, b) => a - b);
    let minimum = nums[1] - nums[0];
    for (let i = 2, n = nums.length; i < n; i++) {
        minimum = Math.min(minimum, nums[i] - nums[i - 1]);
    }
    return minimum;
};

console.log(findValueOfPartition(nums = [100, 1, 10]));
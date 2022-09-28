/*
 * Author: Deean
 * Date: 2022-09-28 22:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let maximum = 0;
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        maximum = Math.max(maximum, nums[i] + nums[nums.length - 1 - i]);
    }
    return maximum;
};

console.log(minPairSum(nums = [3, 5, 4, 2, 4, 6]));
 
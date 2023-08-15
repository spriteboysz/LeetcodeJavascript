/*
 * Author: Deean
 * Date: 2023-08-14 23:34
 * FilePath: sword
 * Description:剑指 Offer 42. 连续子数组的最大和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pref = 0, maximum = nums[0];
    nums.forEach((x) => {
        pref = Math.max(pref + x, x);
        maximum = Math.max(maximum, pref);
    });
    return maximum;
};

console.log(maxSubArray(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]));
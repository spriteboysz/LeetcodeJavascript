/*
 * Author: Deean
 * Date: 2023-02-27 21:50
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maximum = -Infinity, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        maximum = Math.max(maximum, sum);
    }
    return maximum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
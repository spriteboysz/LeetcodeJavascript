/*
 * Author: Deean
 * Date: 2022-09-28 22:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    while (nums.length > 1) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums.pop();
    }
    return nums[0];
};

console.log(triangularSum(nums = [1, 2, 3, 4, 5]));
 
/*
 * Author: Deean
 * Date: 2022-10-03 16:42
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            left++;
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else {
            return [nums[left], nums[right]];
        }
    }
};

console.log(twoSum([10, 26, 30, 31, 47, 60], 40));
 
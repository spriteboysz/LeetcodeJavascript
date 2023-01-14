/*
 * Author: Deean
 * Date: 2023/1/13 23:18
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    let set = [], left = 0, right = nums.length - 1
    while (left < right) {
        set.push((nums[left] + nums[right]));
        left++;
        right--;
    }
    return new Set(set).size;
};
console.log(distinctAverages(nums = [4, 1, 4, 0, 3, 5]));
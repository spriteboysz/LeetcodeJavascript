/*
 * Author: Deean
 * Date: 2023-06-16 22:05
 * FilePath: algorithm
 * Description:34. 在排序数组中查找元素的第一个和最后一个位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = (right + left) >> 1;
        if (nums[mid] === target) {
            let a = dataB = mid;
            while (nums[a - 1] === target) a--;
            while (nums[dataB + 1] === target) dataB++;
            return [a, dataB];
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return [-1, -1];
};

console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 8));
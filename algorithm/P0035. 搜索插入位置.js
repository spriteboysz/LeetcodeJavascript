/*
 * Author: Deean
 * Date: 2023-06-28 23:03
 * FilePath: algorithm
 * Description:35. 搜索插入位置
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1, index = nums.length;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (target <= nums[mid]) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
};

console.log(searchInsert(nums = [1, 3, 5, 6], target = 5));
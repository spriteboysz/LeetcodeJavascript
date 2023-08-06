/*
 * Author: Deean
 * Date: 2023-08-04 22:22
 * FilePath: algorithm
 * Description:27. 移除元素
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0;
    for (let right = 0, n = nums.length; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};

console.log(removeElement(nums = [3, 2, 2, 3], val = 3));
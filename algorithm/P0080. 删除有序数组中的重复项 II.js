/*
 * Author: Deean
 * Date: 2023-08-08 23:50
 * FilePath: algorithm
 * Description:80. 删除有序数组中的重复项 II
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 2) return n;
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

console.log(removeDuplicates(nums = [1, 1, 1, 2, 2, 3]));
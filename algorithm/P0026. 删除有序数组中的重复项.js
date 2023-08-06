/*
 * Author: Deean
 * Date: 2023-08-06 19:13
 * FilePath: algorithm
 * Description:26. 删除有序数组中的重复项
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

console.log(removeDuplicates(nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/*
 * Author: Deean
 * Date: 2023-09-19 23:51
 * FilePath: algorithm
 * Description:2855. 使数组成为递增数组的最少右移次数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
    var nums2 = nums.slice().sort((a, b) => a - b);
    if ((nums2.join("#") + "#").repeat(2).includes(nums.join("#"))) {
        return nums2.indexOf(nums[0]);
    }
    return -1;
};

console.log(minimumRightShifts(nums = [3, 4, 5, 1, 2]));
console.log(minimumRightShifts(nums = [27, 33, 42, 58, 81, 8, 9, 17]));
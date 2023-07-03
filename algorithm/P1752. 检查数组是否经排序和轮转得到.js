/*
 * Author: Deean
 * Date: 2023-07-02 22:34
 * FilePath: algorithm
 * Description:1752. 检查数组是否经排序和轮转得到
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let n = nums.length, index = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            index = i;
            break;
        }
    }
    if (index === 0) return true;
    for (let i = index + 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return nums[0] >= nums[n - 1];
};

console.log(check(nums = [3, 4, 5, 1, 2]));
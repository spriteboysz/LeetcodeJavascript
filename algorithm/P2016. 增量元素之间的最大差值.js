/*
 * Author: Deean
 * Date: 2023-08-02 21:18
 * FilePath: algorithm
 * Description:2016. 增量元素之间的最大差值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let maximum = -1, minimum = nums[0];
    for (let i = 1, n = nums.length; i < n; i++) {
        if (nums[i] > minimum) {
            maximum = Math.max(maximum, nums[i] - minimum);
        }
        minimum = Math.min(minimum, nums[i]);
    }
    return maximum;
};

console.log(maximumDifference(nums = [1, 5, 2, 10]));
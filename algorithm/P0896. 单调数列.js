/*
 * Author: Deean
 * Date: 2023-07-02 23:20
 * FilePath: algorithm
 * Description:896. 单调数列
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let inc = true, dec = true;
    for (let i = 1, n = nums.length; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            inc = false;
        }
        if (nums[i - 1] < nums[i]) {
            dec = false;
        }
    }
    return inc || dec;
};

console.log(isMonotonic(nums = [1, 2, 2, 3]));
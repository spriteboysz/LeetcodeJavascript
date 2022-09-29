/*
 * Author: Deean
 * Date: 2022-09-29 23:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let cnt = 0;
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i - 1] - nums[i];
        if (temp >= 0) {
            cnt += temp + 1;
            nums[i] = nums[i - 1] + 1;
        }
    }
    return cnt;
};

console.log(minOperations(nums = [1, 5, 2, 4, 1]));
 
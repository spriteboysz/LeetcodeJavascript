/*
 * Author: Deean
 * Date: 2023-10-06 22:28
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    let acc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * acc + nums[i] === sum) {
            return i;
        }
        acc += nums[i];
    }
    return -1;
};

console.log(pivotIndex(nums = [1, 7, 3, 6, 5, 6]));
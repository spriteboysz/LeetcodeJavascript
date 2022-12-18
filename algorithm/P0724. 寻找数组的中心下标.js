/*
 * Author: Deean
 * Date: 2022/12/18 17:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a, b)=>a+b, 0);
    let pre = 0;
    for (let i = 0; i < nums.length; i++) {
        if (pre * 2 + nums[i] === sum ) {
            return i;
        }
        pre += nums[i]
    }
    return -1;
};

console.log(pivotIndex(nums = [1, 7, 3, 6, 5, 6]));
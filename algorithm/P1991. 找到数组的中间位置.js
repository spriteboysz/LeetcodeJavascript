/*
 * Author: Deean
 * Date: 2022/12/18 22:41
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let pre = 0;
    for (let i = 0; i < nums.length; i++) {
        if (pre * 2 + nums[i] === sum) {
            return i;
        }
        pre += nums[i];
    }
    return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
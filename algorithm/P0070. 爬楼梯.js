/*
 * Author: Deean
 * Date: 2023-03-03 22:36
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let nums = [1, 1]
    for (let i = 2; i <= n; i++) {
        nums[i] = (nums[i - 1] + nums[i - 2]) % (10 ** 9 + 7)
    }
    return nums[n];
};

console.log(climbStairs(3));
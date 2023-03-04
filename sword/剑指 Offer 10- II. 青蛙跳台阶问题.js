/*
 * Author: Deean
 * Date: 2023-03-03 22:33
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    let nums = [1, 1]
    for (let i = 2; i <= n; i++) {
        nums[i] = (nums[i - 1] + nums[i - 2]) % (10 ** 9 + 7)
    }
    return nums[n];
};

console.log(numWays(7));
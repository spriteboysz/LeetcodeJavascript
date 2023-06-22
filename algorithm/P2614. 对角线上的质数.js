/*
 * Author: Deean
 * Date: 2023-06-21 22:58
 * FilePath: algorithm
 * Description:2614. 对角线上的质数
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    var isPrime = function (num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    let maximum = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            if ((i === j || i + j === n - 1) && isPrime(nums[i][j])) {
                maximum = Math.max(maximum, nums[i][j]);
            }
        }
    }
    return maximum;
};

console.log(diagonalPrime(nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]]));
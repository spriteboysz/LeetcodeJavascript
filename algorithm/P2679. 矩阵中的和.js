/*
 * Author: Deean
 * Date: 2023-07-06 23:39
 * FilePath: algorithm
 * Description:2679. 矩阵中的和
 */


/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
    let m = nums.length, n = nums[0].length;
    for (let i = 0; i < m; i++) {
        nums[i].sort((a, b) => a - b);
    }
    let score = 0;
    for (let j = 0; j < n; j++) {
        let maximum = 0;
        for (let i = 0; i < m; i++) {
            maximum = Math.max(maximum, nums[i][j]);
        }
        score += maximum;
    }
    return score;
};

console.log(matrixSum(nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]));
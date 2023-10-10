/*
 * Author: Deean
 * Date: 2023-07-05 22:53
 * FilePath: algorithm
 * Description:931. 下降路径最小和
 */


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]);
            } else if (j === n - 1) {
                matrix[i][j] += Math.min(matrix[i - 1][j - 1], matrix[i - 1][j]);
            } else {
                matrix[i][j] += Math.min(...[matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1]]);
            }
        }
    }
    return Math.min(...matrix[n - 1]);
};

console.log(minFallingPathSum(plants = [[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
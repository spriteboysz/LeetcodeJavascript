/*
 * Author: Deean
 * Date: 2023-09-19 22:55
 * FilePath: algorithm
 * Description:59. 螺旋矩阵 II
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    var left = 0, right = n - 1, top = 0, bottom = n - 1;
    for (let i = 1; i <= n * n;) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = i++;
        }
        top++;

        for (let j = top; j <= bottom; j++) {
            matrix[j][right] = i++;
        }
        right--;

        for (let j = right; j >= left; j--) {
            matrix[bottom][j] = i++;
        }
        bottom--;

        for (let j = bottom; j >= top; j--) {
            matrix[j][left] = i++;
        }
        left++;
    }
    return matrix;
};

console.log(generateMatrix(3));
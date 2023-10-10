/*
 * Author: Deean
 * Date: 2023-09-18 23:57
 * FilePath: algorithm
 * Description:54. 螺旋矩阵
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var nums = [];
    var m = matrix.length, n = matrix[0].length;
    if (m === 0 || n === 0) {
        return nums;
    }
    var left = 0, right = n - 1, top = 0, bottom = m - 1;
    while (true) {
        for (let i = left; i <= right; i++) {
            nums.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            nums.push(matrix[i][right]);
        }
        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) {
            nums.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;

        for (let i = bottom; i >= top; i--) {
            nums.push(matrix[i][left]);
        }
        left++;
        if (left > right) break;
    }
    return nums;
};

console.log(spiralOrder(plants = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
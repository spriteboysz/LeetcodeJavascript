/*
 * Author: Deean
 * Date: 2023/1/12 23:20
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const n = triangle.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
            } else if (j === i) {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
            } else {
                triangle[i][j] = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
            }
        }
    }
    return Math.min(...triangle[n - 1]);
};

console.log(minimumTotal(triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
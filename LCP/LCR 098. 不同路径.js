/*
 * Author: Deean
 * Date: 2023-10-08 22:55
 * FilePath: LCP
 * Description: LCR 098. 不同路径
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                grid[i][j] = 1;
            } else {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
    }
    return grid[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
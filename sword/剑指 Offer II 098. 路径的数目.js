/*
 * Author: Deean
 * Date: 2022-09-30 22:02
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        grid[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        grid[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }
    return grid[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
 
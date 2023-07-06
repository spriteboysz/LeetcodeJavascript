/*
 * Author: Deean
 * Date: 2023-07-05 22:49
 * FilePath: algorithm
 * Description:64. 最小路径和
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
            
            } else if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
            }
        }
    }
    return grid[m - 1][n - 1];
};

console.log(minPathSum(grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
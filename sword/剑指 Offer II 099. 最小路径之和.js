/*
 * Author: Deean
 * Date: 2023-07-05 22:45
 * FilePath: sword
 * Description:剑指 Offer II 099. 最小路径之和
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    for (let i = 0, m = grid.length; i < m; i++) {
        for (let j = 0, n = grid[0].length; j < n; j++) {
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
    return grid[grid.length - 1][grid[0].length - 1];
};

console.log(minPathSum(grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
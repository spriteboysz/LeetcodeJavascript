/*
 * Author: Deean
 * Date: 2023/1/12 23:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
    let sum = 0, m = grid.length, n = grid[0].length,
        dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 0], [1, -1], [1, 0], [1, 1]];
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let cur = 0
            for (let [dx, dy] of dirs) {
                cur += grid[i + dx][j + dy];
            }
            sum = Math.max(sum, cur);
        }
    }
    return sum;
};

console.log(maxSum(grid = [[6, 2, 1, 3], [4, 2, 1, 5], [9, 2, 8, 7], [4, 1, 2, 9]]));
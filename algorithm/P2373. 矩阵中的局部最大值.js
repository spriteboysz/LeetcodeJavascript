/*
 * Author: Deean
 * Date: 2023/1/14 22:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length - 2, matrix = Array.from(Array(n), _ => new Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let maximum = 0;
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    maximum = Math.max(maximum, grid[x][y]);
                }
            }
            matrix[i][j] = maximum;
        }
    }
    return matrix;
};

console.log(largestLocal(grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]));
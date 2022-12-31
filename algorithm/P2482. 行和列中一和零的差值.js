/*
 * Author: Deean
 * Date: 2022/12/31 11:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const r = Array(grid.length).fill(0);
    const c = Array(grid[0].length).fill(0);
    
    for (const [i, row] of grid.entries()) {
        for (const [j, x] of row.entries()) {
            r[i] += x * 2 - 1;
            c[j] += x * 2 - 1;
        }
    }
    
    for (const [i, x] of r.entries()) {
        for (const [j, y] of c.entries()) {
            grid[i][j] = x + y;
        }
    }
    return grid;
};

console.log(onesMinusZeros(grid = [[0, 1, 1], [1, 0, 1], [0, 0, 1]]));
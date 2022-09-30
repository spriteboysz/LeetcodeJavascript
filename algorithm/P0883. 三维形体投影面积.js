/*
 * Author: Deean
 * Date: 2022-09-30 22:46
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let area = 0, n = grid.length;
    for (let i = 0; i < n; i++) {
        let rowmax = 0, colmax = 0;
        for (let j = 0; j < n; j++) {
            area += grid[i][j] === 0 ? 0 : 1;
            rowmax = Math.max(rowmax, grid[i][j]);
            colmax = Math.max(colmax, grid[j][i]);
        }
        area += rowmax + colmax;
    }
    return area;
};

console.log(projectionArea([[1, 2], [3, 4]]));
console.log(projectionArea([[1, 0], [0, 2]]));

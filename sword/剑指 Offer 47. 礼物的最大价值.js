/*
 * Author: Deean
 * Date: 2022-10-03 15:06
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
};

console.log(maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));
 
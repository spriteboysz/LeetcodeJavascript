/*
 * Author: Deean
 * Date: 2022-10-01 14:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    const n = grid.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === (n - 1)) {
                if (grid[i][j] === 0) return false;
            } else {
                if (grid[i][j] !== 0) return false;
            }
        }
    }
    return true;
};

console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]));
 
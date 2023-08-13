/*
 * Author: Deean
 * Date: 2023-08-12 18:11
 * FilePath: algorithm
 * Description:36. 有效的数独
 */

/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let grid = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") continue;
            let index = board[i][j].charCodeAt(0) - '0'.charCodeAt(0);
            rows[i][index] += 1;
            cols[j][index] += 1;
            grid[Math.floor(i / 3)][Math.floor(j / 3)][index] += 1;
            if (rows[i][index] > 1 || cols[j][index] > 1 || grid[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                return false;
            }
        }
    }
    return true;
};

console.log(isValidSudoku(board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
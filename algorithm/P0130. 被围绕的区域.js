/*
 * Author: Deean
 * Date: 2023-08-12 14:42
 * FilePath: algorithm
 * Description:130. 被围绕的区域
 */

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let m = board.length, n = board[0].length;
    var dfs = function (x, y) {
        if (x < 0 || x === m || y < 0 || y === n) return;
        if (board[x][y] !== 'O') return;
        board[x][y] = "A";
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                if (board[i][j] === 'O') {
                    dfs(i, j);
                }
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    console.log(board);
};

console.log();
solve(board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]])
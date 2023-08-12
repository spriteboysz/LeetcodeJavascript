/*
 * Author: Deean
 * Date: 2023-08-12 17:28
 * FilePath: sword
 * Description:剑指 Offer 12. 矩阵中的路径
 */

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length, n = board[0].length;
    const dfs = (i, j, k) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) return true;
        board[i][j] = "";
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        board[i][j] = word[k];
        return res;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

console.log(exist(board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"));
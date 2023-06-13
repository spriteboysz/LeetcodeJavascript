/*
 * Author: Deean
 * Date: 2023-06-12 23:07
 * FilePath: algorithm
 * Description:419. 甲板上的战舰
 */

/**
 * @param {string[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let cnt = 0;
    for (let i = 0, n = board.length; i < n; i++) {
        for (let j = 0, m = board[0].length; j < m; j++) {
            if (board[i][j] === 'X') {
                if (i > 0 && board[i - 1][j] === 'X') {
                    continue;
                }
                if (j > 0 && board[i][j - 1] === 'X') {
                    continue;
                }
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countBattleships(board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]));
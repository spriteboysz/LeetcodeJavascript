/*
 * Author: Deean
 * Date: 2023-07-04 23:17
 * FilePath: algorithm
 * Description:1275. 找出井字棋的获胜者
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let grid = new Array(9);
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i];
        grid[x * 3 + y] = i % 2 ? 'B' : 'A';
    }
    for (let caseItem of cases) {
        let role = grid[caseItem[0]];
        if (role && grid[caseItem[1]] === role && grid[caseItem[2]] === role) {
            return role;
        }
    }
    return moves.length === 9 ? "Draw" : "Pending";
};

console.log(tictactoe(moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]));
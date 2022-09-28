/*
 * Author: Deean
 * Date: 2022-09-28 23:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0, y = 0;
    for (const move of moves) {
        switch (move) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "R":
                x++;
                break;
            case "L":
                x--;
                break;
        }
    }
    return x === 0 && y === 0;
};

console.log(judgeCircle(moves = "UD"));
 
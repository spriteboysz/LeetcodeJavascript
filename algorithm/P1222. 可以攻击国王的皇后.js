/*
 * Author: Deean
 * Date: 2023-08-11 23:22
 * FilePath: algorithm
 * Description:1222. 可以攻击国王的皇后
 */

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    let map = new Map();
    let ret = [];
    for (const queen of queens) {
        map.set(queen[0] + "#" + queen[1], 1);
    }
    let directions = [
        [+1, 0],
        [0, +1],
        [-1, 0],
        [0, -1],
        [+1, +1],
        [-1, -1],
        [+1, -1],
        [-1, +1],
    ]
    while (directions.length > 0) {
        let [x, y] = king;
        for (let i = 0; i < 8; i++) {
            x += directions[0][0];
            y += directions[0][1];
            if (x < 0 || x > 8 || y < 0 || y > 8) {
                break;
            }
            if (map.get(x + "#" + y)) {
                ret.push([x, y]);
                break;
            }
        }
        directions.shift();
    }
    return ret;
};

console.log(queensAttacktheKing(queens = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], king = [0, 0]));
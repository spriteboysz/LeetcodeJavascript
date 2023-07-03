/*
 * Author: Deean
 * Date: 2023-07-02 18:56
 * FilePath: algorithm
 * Description:1560. 圆形赛道上经过次数最多的扇区
 */


/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    const visited = [];
    const start = rounds[0], end = rounds[rounds.length - 1];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            visited.push(i);
        }
    } else {
        for (let i = 1; i <= end; i++) {
            visited.push(i);
        }
        for (let i = start; i <= n; i++) {
            visited.push(i);
        }
    }
    return visited;
};

console.log(mostVisited(n = 4, rounds = [1, 3, 1, 2]));
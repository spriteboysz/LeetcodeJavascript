/*
 * Author: Deean
 * Date: 2023-06-20 23:36
 * FilePath: algorithm
 * Description:2682. 找出转圈游戏输家
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
    let visited = new Array(n).fill(false);
    visited[0] = true;
    for (let pos = 0, i = 1; ; i++) {
        pos = (pos + i * k) % n;
        if (visited[pos]) break;
        visited[pos] = true;
    }
    let losers = [];
    for (let j = 0; j < n; j++) {
        if (!visited[j]) {
            losers.push(j + 1);
        }
    }
    return losers;
};

console.log(circularGameLosers(5, 2));
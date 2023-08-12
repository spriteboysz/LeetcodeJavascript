/*
 * Author: Deean
 * Date: 2023-08-12 09:46
 * FilePath: algorithm
 * Description:821. 字符的最短距离
 */

/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let n = s.length;
    let distance = [];
    for (let i = 0, j = -n; i < n; i++) {
        if (s[i] === c) {
            j = i;
        }
        distance[i] = i - j;
    }
    for (let i = n - 1, j = n * 2; i >= 0; i--) {
        if (s[i] === c) {
            j = i;
        }
        distance[i] = Math.min(distance[i], j - i);
    }
    return distance;
};

console.log(shortestToChar(s = "loveleetcode", c = 'e'));
/*
 * Author: Deean
 * Date: 2023-08-02 21:15
 * FilePath: algorithm
 * Description:2027. 转换字符串的最少操作次数
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let cnt = 0;
    for (let i = 0, n = s.length; i < n; i++) {
        if (s[i] === 'X') {
            cnt++;
            i += 2;
        }
    }
    return cnt;
};

console.log(minimumMoves(s = "XXOX"));
/*
 * Author: Deean
 * Date: 2023-07-04 22:55
 * FilePath: algorithm
 * Description:1422. 分割字符串的最大得分
 */


/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let n = s.length, pref = 0, score = -1 - n;
    for (let i = 0; i < n; i++) {
        if (i > 0 && pref * 2 - i > score) {
            score = pref * 2 - i;
        }
        pref += s[i] === "0" ? 1 : 0;
    }
    return score + n - pref;
};

console.log(maxScore(s = "011101"));
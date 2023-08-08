/*
 * Author: Deean
 * Date: 2023-08-07 22:48
 * FilePath: algorithm
 * Description:1763. 最长的美好子字符串
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let max_pos = 0, max_len = 0;
    for (let i = 0, n = s.length; i < n; i++) {
        let lower = 0, upper = 0;
        for (let j = i; j < n; j++) {
            if ('a' <= s[j] && s[j] <= 'z') {
                lower |= 1 << (s[j].charCodeAt(0) - 'a'.charCodeAt(0));
            } else {
                upper |= 1 << (s[j].charCodeAt(0) - 'A'.charCodeAt(0));
            }
            if (lower === upper && j - i + 1 > max_len) {
                max_pos = i;
                max_len = j - i + 1;
            }
        }
    }
    return s.slice(max_pos, max_pos + max_len);
};

console.log(longestNiceSubstring(s = "YazaAay"));
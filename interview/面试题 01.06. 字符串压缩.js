/*
 * Author: Deean
 * Date: 2023-08-14 23:00
 * FilePath: interview
 * Description:面试题 01.06. 字符串压缩
 */

/**
 * @param {string} s
 * @return {string}
 */
var compressString = function (s) {
    let ss = [];
    let cnt = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            cnt++;
        } else {
            ss.push(s[i]);
            ss.push(cnt);
            cnt = 1;
        }
    }
    return ss.join("").length < s.length ? ss.join("") : s;
};

console.log(compressString("aabcccccaaa"));
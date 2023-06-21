/*
 * Author: Deean
 * Date: 2023-06-20 23:12
 * FilePath: algorithm
 * Description:2716. 最小化字符串长度
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    let seen = new Set();
    for (const c of s) {
        seen.add(c);
    }
    return seen.size;
};

console.log(minimizedStringLength("dddaaa"));
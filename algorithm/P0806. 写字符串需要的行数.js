/*
 * Author: Deean
 * Date: 2023-07-01 16:38
 * FilePath: algorithm
 * Description:806. 写字符串需要的行数
 */


/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lines = 1, width = 0;
    for (let i = 0; i < s.length; i++) {
        let need = widths[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        width += need;
        if (width > 100) {
            lines++;
            width = need;
        }
    }
    return [lines, width];
};

console.log(numberOfLines(widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    s = "abcdefghijklmnopqrstuvwxyz"));
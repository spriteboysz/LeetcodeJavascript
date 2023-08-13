/*
 * Author: Deean
 * Date: 2023-08-13 22:40
 * FilePath: algorithm
 * Description:2788. 按分隔符拆分字符串
 */

/**
 * @param {string[]} words
 * @param {string} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let ss = [];
    for (const word of words) {
        ss.push(...word.split(separator));
    }
    return ss.filter(el => el !== "");
};

console.log(splitWordsBySeparator(words = ["one.two.three", "four.five", "six"], separator = "."));
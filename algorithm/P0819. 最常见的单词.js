/*
 * Author: Deean
 * Date: 2023-07-01 13:08
 * FilePath: algorithm
 * Description:819. 最常见的单词
 */


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ');
    let words = paragraph.split(' ');
    let map = new Map();
    for (const word of words) {
        if (word !== "" && !banned.includes(word)) {
            map.set(word, (map.get(word) || 0) + 1);
        }
    }
    let maximum = Math.max(...map.values());
    for (const key of map.keys()) {
        if (map.get(key) === maximum) {
            return key;
        }
    }
    return paragraph;
};

console.log(mostCommonWord(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
    banned = ["hit"]));
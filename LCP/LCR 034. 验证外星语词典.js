/*
 * Author: Deean
 * Date: 2023-10-07 23:35
 * FilePath: LCP
 * Description: LCR 034. 验证外星语词典
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = new Map();
    for (let [i, c] of order.split("").entries()) {
        map.set(c, i);
    }
    words = words.map((word) => {
        return word.split('').reduce((res, w) => {
            return res + String.fromCharCode(97 + map.get(w));
        }, '')
    })
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1] > words[i]) return false;
    }
    return true;
};

console.log(isAlienSorted(words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"));
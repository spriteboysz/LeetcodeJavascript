/*
 * Author: Deean
 * Date: 2022-10-05 16:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = new Map();
    for (const [i, c] of order.split("").entries()) {
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

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));

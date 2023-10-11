/*
 * Author: Deean
 * Date: 2023-10-06 22:16
 * FilePath: LCP
 * Description: 
 */


/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let map = new Map();
    for (let word of words) {
        let value = 0;
        for (let c of word) {
            value |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        map.set(word, value);
    }

    let maximum = 0;
    for (let i = 0, n = words.length; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((map.get(words[i]) & map.get(words[j])) === 0) {
                maximum = Math.max(maximum, words[i].length * words[j].length);
            }
        }
    }
    return maximum;
};

console.log(maxProduct(words = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
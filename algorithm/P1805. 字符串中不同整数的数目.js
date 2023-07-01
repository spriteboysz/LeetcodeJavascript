/*
 * Author: Deean
 * Date: 2023-07-01 22:25
 * FilePath: algorithm
 * Description:1805. 字符串中不同整数的数目
 */

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    let words = word.split(/[a-z]+/);
    let set = new Set();
    for (const w of words) {
        if (w.length > 0) {
            set.add(BigInt(w));
        }
    }
    return set.size;
};

console.log(numDifferentIntegers(word = "a123bc34d8ef34"));
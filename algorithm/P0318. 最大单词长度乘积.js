/*
 * Author: Deean
 * Date: 2022-10-01 12:20
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    const map = new Map();
    words.forEach((word) => {
        let value = 0;
        word.split("").forEach((c) => {
            value |= 1 << (c.charCodeAt(0) - 97);
        });
        map.set(word, value);
    });
    let maximum = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((map.get(words[i]) & map.get(words[j])) === 0) {
                maximum = Math.max(maximum, words[i].length * words[j].length);
            }
        }
    }
    return maximum;
};

console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
 
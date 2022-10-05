/*
 * Author: Deean
 * Date: 2022-10-05 16:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const alphabet = new Array(26).fill(0);
    for (const word of words) {
        for (const c of word) {
            alphabet[c.charCodeAt(0) - 97]++;
        }
    }
    return alphabet.every((num) => num % words.length === 0);
};

console.log(makeEqual(["abc", "aabc", "bc"]));
 
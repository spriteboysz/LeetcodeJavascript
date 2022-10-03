/*
 * Author: Deean
 * Date: 2022-10-03 16:10
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let alphabet = new Array(26).fill(0);
    for (const c of chars) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    let cnt = 0;
    for (const word of words) {
        let count = Array.from(alphabet);
        for (const c of word) {
            count[c.charCodeAt(0) - 97]--;
        }
        if (count.every((item) => item >= 0)) {
            cnt += word.length;
        }
    }
    return cnt;
};

console.log(countCharacters(words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"));
 
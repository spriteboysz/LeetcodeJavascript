/*
 * Author: Deean
 * Date: 2023-08-09 20:59
 * FilePath: algorithm
 * Description:2423. 删除字符使频率相同
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let alphabet = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        alphabet[word[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] === 0) continue;
        alphabet[i]--;
        let frequency = new Set();
        for (const c of alphabet) {
            if (c > 0) frequency.add(c);
        }
        if (frequency.size === 1) {
            return true;
        }
        alphabet[i]++;
    }
    return false;
};

console.log(equalFrequency(word = "abcc"));
/*
 * Author: Deean
 * Date: 2022-10-04 13:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let alphabet = new Array(26).fill(0);
    for (const c of words[0]) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    for (let i = 1; i < words.length; i++) {
        let cur = new Array(26).fill(0);
        for (const c of words[i]) {
            cur[c.charCodeAt(0) - 97]++;
        }
        alphabet = alphabet.map((num, i) => Math.min(num, cur[i]));
    }
    return alphabet.map((num, i) => {
        if (num !== 0) {
            return String.fromCharCode(i + 97).repeat(num);
        }
    }).join("").split("");
};

console.log(commonChars(["cool", "lock", "cook"]));
 
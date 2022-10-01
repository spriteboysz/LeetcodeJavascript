/*
 * Author: Deean
 * Date: 2022-10-01 19:20
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let cnt = 0, set = new Set(brokenLetters.split(""));
    for (const word of text.split(" ")) {
        let flag = true;
        for (const c of word.split("")) {
            if (set.has(c)) {
                flag = false;
                break;
            }
        }
        if (flag) cnt++;
    }
    return cnt;
};

console.log(canBeTypedWords(text = "leet code", brokenLetters = "lt"));
 
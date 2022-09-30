/*
 * Author: Deean
 * Date: 2022-09-30 23:06
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    function process(word) {
        let num = 0;
        word.split("").forEach((c) => {
            num = num * 10 + c.charCodeAt(0) - 97;
        });
        return num;
    }

    return process(firstWord) + process(secondWord) === process(targetWord);
};
console.log(isSumEqual("aaa", "a", "aab"));
console.log(isSumEqual("aaa", "a", "aaaa"));

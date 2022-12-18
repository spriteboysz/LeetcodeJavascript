/*
 * Author: Deean
 * Date: 2022/12/17 23:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i][words[i].length - 1] !== words[i + 1 === words.length ? 0 : i + 1][0]) {
            return false;
        }
    }
    return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful"));
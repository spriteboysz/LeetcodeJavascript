/*
 * Author: Deean
 * Date: 2023/1/18 21:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.length >= 2 && word[0] === word[0].toLowerCase() && word[1] === word[1].toUpperCase()) {
        return false;
    }
    
    for (let i = 2; i < word.length; ++i) {
        if (word[i] === word[i].toLowerCase() ^ word[1] === word[1].toLowerCase()) {
            return false;
        }
    }
    return true;
};

console.log(detectCapitalUse("USA"));
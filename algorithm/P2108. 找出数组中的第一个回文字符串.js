/*
 * Author: Deean
 * Date: 2022-09-28 23:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (const word of words) {
        let cur = word.split("").reverse().join("");
        if (cur === word) {
            return word;
        }
    }
    return "";
};

console.log(firstPalindrome(["notapalindrome", "racecar"]));
 
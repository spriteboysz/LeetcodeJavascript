/*
 * Author: Deean
 * Date: 2022-10-02 19:26
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);
    if (index > 0) {
        return word.substring(0, index + 1).split("").reverse().join("")
            + word.substring(index + 1,);
    } else {
        return word;
    }
};

console.log(reversePrefix(word = "xyxzxe", ch = "z"));
console.log(reversePrefix(word = "abcd", ch = "z"));

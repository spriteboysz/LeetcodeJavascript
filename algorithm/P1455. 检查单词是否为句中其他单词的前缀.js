/*
 * Author: Deean
 * Date: 2022-10-03 19:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    for (const [i, word] of sentence.split(" ").entries()) {
        if (word.startsWith(searchWord)) return i + 1;
    }
    return -1;
};
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
console.log(isPrefixOfWord("i am tired", "you"));

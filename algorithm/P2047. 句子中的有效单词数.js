/*
 * Author: Deean
 * Date: 2023-07-05 22:11
 * FilePath: algorithm
 * Description:2047. 句子中的有效单词数
 */


/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    return sentence.split(' ').filter(w => /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(w)).length;
};

console.log(countValidWords(sentence = "!this  1-s b8d!"));
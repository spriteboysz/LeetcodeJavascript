/*
 * Author: Deean
 * Date: 2023-08-07 23:37
 * FilePath: algorithm
 * Description:1451. 重新排列句子中的单词
 */

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let words = text.toLocaleLowerCase().split(" ");
    words.sort((a, b) => {
        return a.length - b.length
    });
    return words[0][0].toUpperCase() + words.join(" ").slice(1);
};

console.log(arrangeWords(text = "Keep calm and code on"));
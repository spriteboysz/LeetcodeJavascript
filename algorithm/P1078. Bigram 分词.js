/*
 * Author: Deean
 * Date: 2022/12/18 22:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let ss = [];
    let words = text.split(" ");
    for (let i = 0; i < words.length - 2; i++) {
        if (words[i] === first && words[i + 1] === second) {
            ss.push(words[i + 2]);
        }
    }
    return ss;
};

console.log(findOcurrences(text = "alice is a good girl she is a good student",
    first = "a", second = "good"));
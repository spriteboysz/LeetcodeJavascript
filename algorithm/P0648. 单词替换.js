/*
 * Author: Deean
 * Date: 2023-08-09 22:07
 * FilePath: algorithm
 * Description:648. 单词替换
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    dictionary.sort((word1, word2) => word1.length - word2.length);
    let words = sentence.split(" ");
    let map = new Map();
    for (let i = 0, n = words.length; i < n; i++) {
        if (map.has(words[i])) {
            words[i] = map.get(words[i]);
        } else {
            let flag = true;
            for (let j = 0, m = dictionary.length; j < m; j++) {
                if (words[i].startsWith(dictionary[j])) {
                    flag = false;
                    words[i] = dictionary[j];
                    map.set(words[i], dictionary[j]);
                    break;
                }
            }
            if (flag) {
                map.set(words[i], words[i]);
            }
        }
    }
    return words.join(" ");
};

console.log(replaceWords(dictionary = ["cat", "bat", "rat"], sentence = "the cattle was rattled by the battery"));
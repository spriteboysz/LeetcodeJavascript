/*
 * Author: Deean
 * Date: 2023-10-08 22:28
 * FilePath: LCP
 * Description:LCR 063. 单词替换
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let map = new Map();
    dictionary.sort((w1, w2) => w1.length - w2.length);

    let words = sentence.split(" ");
    for (let i = 0, n = words.length; i < n; i++) {
        let word = words[i];
        if (map.has(word)) {
            words[i] = map.get(word);
        } else {
            for (let root of dictionary) {
                if (word.startsWith(root)) {
                    words[i] = root;
                    map.set(word, root);
                    break;
                }
            }
        }
    }
    return words.join(" ");
};

console.log(replaceWords(dictionary = ["cat", "bat", "rat"], sentence = "the cattle was rattled by the battery"));
console.log(replaceWords(dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"));
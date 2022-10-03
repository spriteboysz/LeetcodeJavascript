/*
 * Author: Deean
 * Date: 2022-10-03 09:52
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        for (const root of dictionary) {
            if (words[i].startsWith(root)) {
                words[i] = root;
            }
        }
    }
    return words.join(" ");
};

console.log(replaceWords(dictionary = ["catt", "cat", "bat", "rat"],
    sentence = "the cattle was rattled by the battery"));
console.log(replaceWords(dictionary = ["ac", "ab"],
    sentence = "it is abnormal that this solution is accepted"))
 
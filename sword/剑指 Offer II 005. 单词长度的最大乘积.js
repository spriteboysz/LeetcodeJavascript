/*
 * Author: Deean
 * Date: 2022-10-01 19:28
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    const map = new Map();
    for (const word of words) {
        let value = 0;
        for (const c of word.split("")) {
            value |= 1 << c.charCodeAt(0) - 97;
        }
        map.set(word, value);
    }
    // console.log(map);
    let maximum = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((map.get(words[i]) & map.get(words[j])) === 0) {
                maximum = Math.max(maximum, words[i].length * words[j].length);
            }
        }
    }
    return maximum;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]));
 
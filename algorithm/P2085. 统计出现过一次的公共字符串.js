/*
 * Author: Deean
 * Date: 2022-10-02 23:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    const map1 = new Map(), map2 = new Map();
    for (const word of words1) {
        map1.set(word, (map1.get(word) || 0) + 1);
    }
    for (const word of words2) {
        map2.set(word, (map2.get(word) || 0) + 1);
    }
    let cnt = 0;
    for (const key of map1.keys()) {
        if (map1.get(key) === 1 && map2.get(key) === 1) {
            cnt++;
        }
    }
    return cnt;
};

console.log(countWords(words1 = ["a", "ab"], words2 = ["a", "a", "a", "ab"]));
 
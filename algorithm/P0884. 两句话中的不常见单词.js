/*
 * Author: Deean
 * Date: 2022-10-02 23:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const map1 = new Map(), map2 = new Map();
    for (const word of s1.split(" ")) {
        map1.set(word, (map1.get(word) || 0) + 1);
    }
    for (const word of s2.split(" ")) {
        map2.set(word, (map2.get(word) || 0) + 1);
    }
    let uncommon = [];
    for (const word of map1.keys()) {
        if (map1.get(word) === 1 && !map2.has(word)) {
            uncommon.push(word);
        }
    }
    for (const word of map2.keys()) {
        if (!map1.has(word) && map2.get(word) === 1) {
            uncommon.push(word);
        }
    }
    return uncommon;
};

console.log(uncommonFromSentences(s1 = "apple apple", s2 = "banana"));
 
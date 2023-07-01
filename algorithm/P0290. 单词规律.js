/*
 * Author: Deean
 * Date: 2023-07-01 10:27
 * FilePath: algorithm
 * Description:290. 单词规律
 */


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    console.log(words);
    let m = pattern.length, n = words.length;
    if (m !== n) return false;
    let map1 = new Map(), map2 = new Map();
    for (let i = 0; i < n; i++) {
        if ((map1.has(pattern[i]) && map1.get(pattern[i]) !== words[i]) || (map2.has(words[i]) && map2.get(words[i]) !== pattern[i])) {
            return false;
        }
        map1.set(pattern[i], words[i]);
        map2.set(words[i], pattern[i]);
    }
    return true;
};

console.log(wordPattern(pattern = "abba", s = "dog constructor constructor dog"));
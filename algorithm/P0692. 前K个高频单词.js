/*
 * Author: Deean
 * Date: 2023-08-06 10:41
 * FilePath: algorithm
 * Description:692. 前K个高频单词
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = new Map();
    words.forEach((word) => {
        map.set(word, (map.get(word) || 0) + 1);
    });
    let words2 = [...map.keys()];
    words2.sort((a, b) => map.get(a) === map.get(b) ? a.localeCompare(b) : map.get(b) - map.get(a));
    return words2.slice(0, k);
};

console.log(topKFrequent(words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2));
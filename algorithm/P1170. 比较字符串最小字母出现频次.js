/*
 * Author: Deean
 * Date: 2023-08-13 13:45
 * FilePath: algorithm
 * Description:1170. 比较字符串最小字母出现频次
 */

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
    var process = function (word) {
        let alphabet = new Array(26).fill(0);
        for (const c of word) {
            alphabet[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            if (alphabet[i] > 0) {
                return alphabet[i];
            }
        }
        return 0;
    }
    
    queries = queries.map(word => process(word));
    words = words.map(word => process(word)).sort((a, b) => b - a);
    let smaller = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        for (let word of words) {
            if (queries[i] < word) {
                smaller[i]++;
            } else {
                break;
            }
        }
    }
    return smaller;
};

console.log(numSmallerByFrequency(queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"]));
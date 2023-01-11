/*
 * Author: Deean
 * Date: 2023/1/10 23:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    const values = [];
    for (let word of words) {
        let value = 0;
        for (let c of word) {
            value |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        values.push(value);
    }
    let cnt = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] === values[j]) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]));
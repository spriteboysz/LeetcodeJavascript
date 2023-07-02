/*
 * Author: Deean
 * Date: 2023-07-01 23:12
 * FilePath: algorithm
 * Description:1668. 最大重复子字符串
 */


/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let n = Math.floor(sequence.length / word.length);
    for (let i = n; i >= 0; i--) {
        if (sequence.includes(word.repeat(i))) {
            return i;
        }
    }
    return 0;
};

console.log(maxRepeating(sequence = "ababc", word = "abcd"));
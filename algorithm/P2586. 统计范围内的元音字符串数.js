/*
 * Author: Deean
 * Date: 2023-06-11 22:43
 * FilePath: algorithm
 * Description:2586. 统计范围内的元音字符串数
 */

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    const vowels = ["a", "e", "i", "o", "u"];
    let cnt = 0;
    for (const word of words.slice(left, right + 1)) {
        if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
            cnt += 1;
        }
    }
    return cnt;
};

console.log(vowelStrings(words = ["are", "amy", "u"], left = 0, right = 2));
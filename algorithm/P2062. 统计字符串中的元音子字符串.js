/*
 * Author: Deean
 * Date: 2023-08-02 21:10
 * FilePath: algorithm
 * Description:2062. 统计字符串中的元音子字符串
 */

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    let cnt = 0;
    for (let i = 0, n = word.length; i < n; i++) {
        for (let j = i + 4; j < n; j++) {
            const ss = new Set(word.slice(i, j + 1))
            if ([...ss].sort().join('') === "aeiou") {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countVowelSubstrings(word = "aeiouu"));
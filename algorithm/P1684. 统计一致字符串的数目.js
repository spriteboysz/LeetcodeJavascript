/*
 * Author: Deean
 * Date: 2022-09-27 23:51
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let cnt = 0;
    words.map((word) => new Set(word.split(""))).forEach(function (word) {
        let flag = true;
        for (const c of word) {
            if (!allowed.split("").includes(c)) {
                flag = false;
                break;
            }
        }
        if (flag) cnt++;
    });
    return cnt;
};

console.log(countConsistentStrings(allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]));
 
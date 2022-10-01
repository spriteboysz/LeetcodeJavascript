/*
 * Author: Deean
 * Date: 2022-10-01 20:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let cnt = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let a = s.charAt(i), b = s.charAt(i + 1), c = s.charAt(i + 2);
        if (a !== b && a !== c && b !== c) {
            cnt++;
        }
    }
    return cnt;
};
console.log(countGoodSubstrings("aababcabc"));
 
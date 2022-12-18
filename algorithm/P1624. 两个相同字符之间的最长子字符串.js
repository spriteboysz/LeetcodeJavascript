/*
 * Author: Deean
 * Date: 2022/12/18 22:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > 0; j--) {
            if (s[i] === s[j]) {
                max = Math.max(max, j - i - 1);
            }
        }
    }
    return max;
};

console.log(maxLengthBetweenEqualCharacters("cabbac"));
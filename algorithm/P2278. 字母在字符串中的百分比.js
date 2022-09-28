/*
 * Author: Deean
 * Date: 2022-09-28 22:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    let cnt = 0;
    for (const c of s) {
        if (c === letter) cnt++;
    }
    return Math.floor(cnt * 100 / s.length);
};

console.log(percentageLetter(s = "foobar", letter = "o"));
 
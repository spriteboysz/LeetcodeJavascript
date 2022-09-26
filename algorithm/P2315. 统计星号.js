/*
 * Author: Deean
 * Date: 2022-09-26 23:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let cnt = 0, vertical = 0;
    for (const c of s) {
        if (vertical % 2 === 0 && c === "*") {
            cnt++;
        }
        if (c === "|") {
            vertical++;
        }
    }
    return cnt;
};

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
 
/*
 * Author: Deean
 * Date: 2022/12/18 17:28
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let alphabet = new Array(26).fill(0);
    for (const c of s) {
        let code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            alphabet[code-65] |= 1;
        }
        if (code >= 97 && code <= 122) {
            alphabet[code-97] |= 2;
        }
    }
    for (let i = 25; i >= 0; i--) {
        if (alphabet[i] === 3) {
            return String.fromCharCode(i+65);
        }
    }
    return "";
};

console.log(greatestLetter("arRAzFif"));
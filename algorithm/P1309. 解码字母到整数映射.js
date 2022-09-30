/*
 * Author: Deean
 * Date: 2022-09-30 22:31
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let ss = "", n = s.length, offset = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 2 < n && s.charAt(i + 2) === "#") {
            offset = parseInt(s.charAt(i)) * 10 + parseInt(s.charAt(i + 1)) - 1;
            i += 2;
        } else {
            offset = parseInt(s.charAt(i)) - 1;
        }
        ss += String.fromCharCode(offset + 97);
    }
    return ss;
};

console.log(freqAlphabets("10#11#121326#"));
 
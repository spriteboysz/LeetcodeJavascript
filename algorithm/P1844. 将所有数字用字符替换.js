/*
 * Author: Deean
 * Date: 2022-09-28 23:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let ss = "";
    s.split("").forEach((c, i) => {
        if (c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)) {
            ss += String.fromCharCode(s.charAt(i - 1).charCodeAt(0) + c.charCodeAt(0) - "0".charCodeAt(0));
        } else {
            ss += c;
        }
    });
    return ss;
};

console.log(replaceDigits(s = "a1b2c3d4e"));
 
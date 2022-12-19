/*
 * Author: Deean
 * Date: 2022/12/19 23:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
    return str1.substring(0, gcd(str1.length, str2.length));
};

console.log(gcdOfStrings(str1 = "ABABAB", str2 = "ABAB"));
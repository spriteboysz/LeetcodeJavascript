/*
 * Author: Deean
 * Date: 2022-09-25 22:59
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let len = s.length;
    return s.substring(n % len) + s.substring(0, n % len);
};

console.log(reverseLeftWords(s = "lrloseumgh", k = 6));
 
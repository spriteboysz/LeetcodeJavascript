/*
 * Author: Deean
 * Date: 2022-09-12 12:58
 * FilePath: algorithm/P1374. 生成每种字符都是奇数个的字符串.js
 * Description: 
 */

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    var ss = '';
    return n % 2 === 1 ? ss + 'a'.repeat(n) : ss + 'a'.repeat(n - 1) + 'b';
};

console.log(generateTheString(4));
console.log(generateTheString(5));
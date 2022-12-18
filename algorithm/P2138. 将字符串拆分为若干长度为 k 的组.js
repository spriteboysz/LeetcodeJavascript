/*
 * Author: Deean
 * Date: 2022/12/18 17:48
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let divided = [];
    for (let i = 0; i < s.length; i += k) {
        let str = s.slice(i, i + k);
        divided.push(str.length === k ? str : str.padEnd(k, fill));
    }
    return divided;
};

console.log(divideString(s = "abcdefghij", k = 3, fill = "x"));
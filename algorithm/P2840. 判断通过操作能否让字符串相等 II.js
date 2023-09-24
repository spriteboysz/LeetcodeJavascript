/*
 * Author: Deean
 * Date: 2023-09-24 15:50
 * FilePath: algorithm
 * Description:2840. 判断通过操作能否让字符串相等 II
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
    var alphabet = new Array(26).fill(0);
    for (let i = 0, n = s1.length; i < n; i += 2) {
        alphabet[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        alphabet[s2.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
    }
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] !== 0) {
            return false;
        }
    }

    for (let i = 1, n = s1.length; i < n; i += 2) {
        alphabet[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        alphabet[s2.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
    }
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] !== 0) {
            return false;
        }
    }
    return true;
};

//console.log(checkStrings(s1 = "abcdba", s2 = "cabdab"));
console.log(checkStrings(s1 = "abe", s2 = "bea"));
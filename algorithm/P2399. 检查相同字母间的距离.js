/*
 * Author: Deean
 * Date: 2023-08-06 20:57
 * FilePath: algorithm
 * Description:2399. 检查相同字母间的距离
 */

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    let alphabet = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (alphabet[index] === -1) {
            alphabet[index] = i;
        } else {
            alphabet[index] = i - alphabet[index] - 1;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] !== -1 && alphabet[i] !== distance[i]) {
            return false;
        }
    }
    return true;
};

console.log(checkDistances(s = "abaccb",
    distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
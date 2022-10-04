/*
 * Author: Deean
 * Date: 2022-10-04 20:34
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (const c of s) {
        if (map.get(c) === 1) return c;
    }
    return " ";
};

console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar(""));

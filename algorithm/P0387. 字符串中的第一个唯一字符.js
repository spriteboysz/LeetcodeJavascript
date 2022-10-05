/*
 * Author: Deean
 * Date: 2022-10-05 16:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (const [i, c] of s.split("").entries()) {
        if (map.get(c) === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));

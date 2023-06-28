/*
 * Author: Deean
 * Date: 2022-09-26 22:57
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var repeatedCharacter = function (s) {
    let set = new Set();
    for (const c of s) {
        if (set.has(c)) {
            return c;
        }
        set.add(c);
    }
};

console.log(repeatedCharacter("abcdd"));
 
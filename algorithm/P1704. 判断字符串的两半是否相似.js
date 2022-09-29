/*
 * Author: Deean
 * Date: 2022-09-29 23:35
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let left = 0, right = 0;
    s.split("").forEach((c, i) => {
        if (vowel.has(c)) {
            if (i < s.length / 2) {
                left++;
            } else {
                right++;
            }
        }
    });
    return left === right;
};

console.log(halvesAreAlike(s = "book"));
console.log(halvesAreAlike(s = "textbook"));

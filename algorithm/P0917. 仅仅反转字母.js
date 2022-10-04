/*
 * Author: Deean
 * Date: 2022-10-04 21:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let letter = [];
    for (const c of s) {
        if (c.match(/[a-zA-Z]/)) {
            letter.push(c);
        }
    }
    letter.reverse();
    let ss = [], i = 0;
    for (const c of s) {
        if (c.match(/[A-Za-z]/)) {
            ss.push(letter[i++]);
        } else {
            ss.push(c);
        }
    }
    return ss.join("");
};

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
 
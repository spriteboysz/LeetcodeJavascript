/*
 * Author: Deean
 * Date: 2023-06-28 22:53
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
};

console.log(isFlipedString(s1 = "waterbottle", s2 = "erbottlewat"));
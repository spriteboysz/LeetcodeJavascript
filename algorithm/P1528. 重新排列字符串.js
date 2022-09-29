/*
 * Author: Deean
 * Date: 2022-09-29 23:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let ss = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        ss[indices[i]] = s[i];
    }
    return ss.join("");
};

console.log(restoreString(s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]));
 
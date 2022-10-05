/*
 * Author: Deean
 * Date: 2022-10-05 18:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let ss = "", arr = [];
    for (const space of spaces) {
        arr[space] = 1;
    }
    for (let [i, c] of s.split("").entries()) {
        if (arr[i]) ss += " ";
        ss += c;
    }
    return ss;
};

console.log(addSpaces(s = "icodeinpython", spaces = [1, 5, 7, 9]));
console.log(addSpaces(s = "spacing", spaces = [0, 1, 2, 3, 4, 5, 6]));

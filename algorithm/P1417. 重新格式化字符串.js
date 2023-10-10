/*
 * Author: Deean
 * Date: 2022-10-05 15:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let letters = [], digits = [];
    for (const c of s) {
        if (c.match(/[a-z]/)) {
            letters.push(c);
        } else {
            digits.push(c);
        }
    }
    if (Math.abs(letters.length - digits.length) > 1) return "";
    if (digits.length > letters.length) {
        dataA = digits;
        dataB = letters;
    } else {
        dataA = letters;
        dataB = digits;
    }
    return dataA.map((el, i) => [el, (dataB[i] || '')]).flat().join('');

};

console.log(reformat("covid2019"));
console.log(reformat("leetcode"));

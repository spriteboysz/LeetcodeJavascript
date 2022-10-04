/*
 * Author: Deean
 * Date: 2022-10-04 21:40
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let stack = [];
    for (const c of s) {
        let n = stack.length;
        if (n < 2 || stack[n - 2] !== c || stack[n - 1] !== c) {
            stack.push(c);
        }
    }
    return stack.join("");
};

console.log(makeFancyString("aaabaaaa"));
console.log(makeFancyString("aab"));

/*
 * Author: Deean
 * Date: 2022-10-05 15:57
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    for (const c of s) {
        if (stack.length > 0 &&
            stack[stack.length - 1] !== c &&
            stack[stack.length - 1].toLowerCase() === c.toLowerCase()) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

console.log(makeGood(s = "abBAcC"));
console.log(makeGood(s = "s"));

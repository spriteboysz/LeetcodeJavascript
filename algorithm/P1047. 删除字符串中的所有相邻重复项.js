/*
 * Author: Deean
 * Date: 2022-10-02 23:10
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    for (const c of s.split("")) {
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

console.log(removeDuplicates("abbaca"));
 
/*
 * Author: Deean
 * Date: 2023-07-05 23:19
 * FilePath: algorithm
 * Description:921. 使括号有效的最少添加
 */


/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let stack = [];
    for (const c of s) {
        if (stack.length === 0) {
            stack.push(c);
        } else if (stack[stack.length - 1] === "(" && c === ")") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length;
};

console.log(minAddToMakeValid(s = "())"));
console.log(minAddToMakeValid(s = "((("));
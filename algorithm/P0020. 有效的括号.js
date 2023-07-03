/*
 * Author: Deean
 * Date: 2023-07-02 23:32
 * FilePath: algorithm
 * Description:20. 有效的括号
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (const c of s) {
        if (stack.length === 0) {
            stack.push(c);
            continue;
        }
        let last = stack[stack.length - 1];
        if (c === ")" && last === "(") {
            stack.pop();
        } else if (c === "]" && last === "[") {
            stack.pop();
        } else if (c === "}" && last === "{") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};

console.log(isValid(s = "()[]{}"));
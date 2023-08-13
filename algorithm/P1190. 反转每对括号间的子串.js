/*
 * Author: Deean
 * Date: 2023-08-13 12:10
 * FilePath: algorithm
 * Description:1190. 反转每对括号间的子串
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [], ss = [];
    for (let c of s) {
        if (c === "(") {
            ss.push(c);
            stack.push(ss.length - 1);
        } else if (c === ")") {
            ss = [...ss.slice(0, stack[stack.length - 1]), ...ss.slice(stack[stack.length - 1] + 1).reverse()];
            stack.pop();
        } else {
            ss.push(c);
        }
    }
    return ss.join("");
};

console.log(reverseParentheses(s = "(ed(et(oc))el)"));
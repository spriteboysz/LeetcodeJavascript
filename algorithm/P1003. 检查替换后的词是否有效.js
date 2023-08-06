/*
 * Author: Deean
 * Date: 2023-08-06 09:09
 * FilePath: algorithm
 * Description:1003. 检查替换后的词是否有效
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length < 1) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a' && s[i] === 'c') {
            stack.pop();
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid(s = "aabcbc"));
console.log(isValid(s = "abcabcababcc"));
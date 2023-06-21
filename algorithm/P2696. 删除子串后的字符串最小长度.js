/*
 * Author: Deean
 * Date: 2023-06-20 23:28
 * FilePath: algorithm
 * Description:2696. 删除子串后的字符串最小长度
 */

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [];
    for (const c of s) {
        if (stack.length === 0) {
            stack.push(c);
        } else if (stack[stack.length - 1] === "A" && c === "B") {
            stack.pop();
        } else if (stack[stack.length - 1] === "C" && c === "D") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length;
};

console.log(minLength(s = "ABFCACDB"));
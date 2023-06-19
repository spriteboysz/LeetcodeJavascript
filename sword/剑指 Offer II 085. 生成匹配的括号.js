/*
 * Author: Deean
 * Date: 2023-06-18 23:18
 * FilePath: sword
 * Description:剑指 Offer II 085. 生成匹配的括号
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let paths = [];
    var backtrace = function (left, right, path) {
        if (right === n) {
            paths.push(path);
            return;
        }
        if (left < n) {
            backtrace(left + 1, right, path + "(");
        }
        if (right < left) {
            backtrace(left, right + 1, path + ")");
        }
    }
    backtrace(0, 0, "");
    return paths;
};


console.log(generateParenthesis(3));
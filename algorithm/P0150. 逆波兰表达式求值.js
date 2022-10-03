/*
 * Author: Deean
 * Date: 2022-10-03 23:40
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => (b / a) | 0, // | 0 直接去掉正负数小数点后面的
    };

    let stack = [];
    for (const token of tokens) {
        if (token in calc) {
            stack.push(calc[token](stack.pop(), stack.pop()));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
 
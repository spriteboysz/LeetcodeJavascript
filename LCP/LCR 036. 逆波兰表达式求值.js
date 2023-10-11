/*
 * Author: Deean
 * Date: 2023-10-07 23:45
 * FilePath: LCP
 * Description: LCR 036. 逆波兰表达式求值
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    var isNumber = function (token) {
        return !('+' === token || '-' === token || '*' === token || '/' === token);
    }

    let stack = [];
    for (const token of tokens) {
        if (isNumber(token)) {
            stack.push(parseInt(token));
        } else {
            let b = stack.pop(), a = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
            }
        }
    }
    return stack.pop();
};

console.log(evalRPN(tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
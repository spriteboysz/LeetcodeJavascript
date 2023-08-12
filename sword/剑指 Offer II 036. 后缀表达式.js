/*
 * Author: Deean
 * Date: 2023-06-19 23:28
 * FilePath: algorithm
 * Description:剑指 Offer II 036. 后缀表达式
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

console.log(evalRPN(tokens = ["2", "1", "+", "3", "*"]));
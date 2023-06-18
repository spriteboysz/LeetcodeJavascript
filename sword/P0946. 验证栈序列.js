/*
 * Author: Deean
 * Date: 2023-06-18 22:44
 * FilePath: sword
 * Description:946. 验证栈序列
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (const num of pushed) {
        stack.push(num);
        while (stack.length > 0 && stack[stack.length - 1] === popped[0]) {
            stack.pop();
            popped.shift();
        }
    }
    return stack.length === 0 && popped.length === 0;
};


console.log(validateStackSequences(pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]));
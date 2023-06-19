/*
 * Author: Deean
 * Date: 2023-06-18 22:34
 * FilePath: sword
 * Description:剑指 Offer 31. 栈的压入、弹出序列
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
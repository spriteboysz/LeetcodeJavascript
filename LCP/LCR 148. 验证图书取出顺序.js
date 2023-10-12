/*
 * Author: Deean
 * Date: 2023-10-09 22:56
 * FilePath: LCP
 * Description: LCR 148. 验证图书取出顺序
 */


/**
 * @param {number[]} putIn
 * @param {number[]} takeOut
 * @return {boolean}
 */
var validateBookSequences = function (putIn, takeOut) {
    let stack = [];
    for (const num of putIn) {
        stack.push(num);
        while (stack.length > 0 && stack[stack.length - 1] === takeOut[0]) {
            stack.pop();
            takeOut.shift();
        }
    }
    return stack.length === 0 && takeOut.length === 0;
};

console.log(validateBookSequences(putIn = [6, 7, 8, 9, 10, 11], takeOut = [9, 11, 10, 8, 7, 6]));
/*
 * Author: Deean
 * Date: 2022-10-04 13:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];
    for (const operation of operations) {
        if (operation === "+") {
            stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
        } else if (operation === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operation === "C") {
            stack.pop();
        } else {
            stack.push(parseInt(operation));
        }
    }
    return stack.length === 0 ? 0 : stack.reduce((a, b) => a + b);
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));
console.log(calPoints(["1", "C"]));

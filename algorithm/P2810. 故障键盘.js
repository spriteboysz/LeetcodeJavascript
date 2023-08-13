/*
 * Author: Deean
 * Date: 2023-08-13 22:34
 * FilePath: algorithm
 * Description:2810. 故障键盘
 */

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let stack = [];
    for (const c of s) {
        if (c === 'i') {
            stack.reverse();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

console.log(finalString(s = "poiinter"));
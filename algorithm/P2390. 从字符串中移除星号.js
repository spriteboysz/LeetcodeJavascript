/*
 * Author: Deean
 * Date: 2022-10-03 19:06
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = [];
    for (const c of s) {
        if (stack.length > 0 && c === "*") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));

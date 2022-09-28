/*
 * Author: Deean
 * Date: 2022-09-28 21:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let ss = "", cur = "", balance = 0;
    for (const c of s) {
        if (c === "(") {
            balance++;
        } else {
            balance--;
        }
        cur += c;
        if (balance === 0) {
            ss += cur.substring(1, cur.length - 1);
            cur = "";
        }
    }
    return ss;
};

console.log(removeOuterParentheses(s = "(()())(())(()(()))"));
 
/*
 * Author: Deean
 * Date: 2023-07-02 17:45
 * FilePath: algorithm
 * Description:844. 比较含退格的字符串
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    /**
     * @param {string} s
     * @return {string}
     */
    var process = function (s) {
        let stack = [];
        for (const c of s) {
            if (stack.length === 0) {
                if (c !== "#") stack.push(c);
            } else if (c === "#") {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return stack.join("");
    }
    
    return process(s) === process(t);
};

console.log(backspaceCompare(s = "ab##", t = "c#d#"));
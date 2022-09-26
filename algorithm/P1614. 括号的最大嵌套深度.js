/*
 * Author: Deean
 * Date: 2022-09-26 23:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let depth = 0, max = 0;
    for (const c of s) {
        if (c === ")") {
            depth--;
        }
        if (c === "(") {
            depth++;
        }
        max = Math.max(max, depth);
    }
    return max;
};

console.log(maxDepth(s = "(1)+((2))+(((3)))"));
 
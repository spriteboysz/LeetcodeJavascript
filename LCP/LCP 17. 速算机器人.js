/*
 * Author: Deean
 * Date: 2022-09-28 22:35
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let x = 1, y = 0;
    for (const c of s) {
        if (c === "A") {
            x = 2 * x + y;
        } else if (c === "B") {
            y = 2 * y + x;
        }
    }
    return x + y;
};

console.log(calculate("AB"));
 
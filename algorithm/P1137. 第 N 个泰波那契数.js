/*
 * Author: Deean
 * Date: 2022-10-04 21:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n <= 1) return n;
    if (n === 2) return 1;
    let p = 0, q = 0, r = 1, s = 1;
    for (let i = 3; i <= n; ++i) {
        p = q;
        q = r;
        r = s;
        s = p + q + r;
    }
    return s;

};

console.log(tribonacci(25));
 
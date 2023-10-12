/*
 * Author: Deean
 * Date: 2023-10-08 23:15
 * FilePath: LCP
 * Description: LCR 126. 斐波那契数
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n;
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = (p + q) % 1000000007;
    }
    return r;
};

console.log(fib(2));
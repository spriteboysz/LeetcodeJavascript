/*
 * Author: Deean
 * Date: 2023-08-12 18:35
 * FilePath: algorithm
 * Description:50. Pow(x, n)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    let exp = n > 0 ? n : -n;
    let pow = 1;
    while (exp > 0) {
        if (exp % 2 === 1) pow *= x;
        x *= x;
        exp = Math.floor(exp / 2);
    }
    return n > 0 ? pow : 1 / pow;
};

console.log(myPow(x = 2.00000, n = 10));
console.log(myPow(x = 2.00000, n = -2));
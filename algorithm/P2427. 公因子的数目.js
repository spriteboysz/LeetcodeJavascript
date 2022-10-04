/*
 * Author: Deean
 * Date: 2022-10-04 09:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    let g = gcd(a, b);
    let cnt = Number.isInteger(Math.sqrt(g)) ? 1 : 0;
    for (let i = 0; i * i < g; i++) {
        if (g % i === 0) cnt += 2;
    }
    return cnt;
};

console.log(commonFactors(25, 10));
 
/*
 * Author: Deean
 * Date: 2023-07-01 10:47
 * FilePath: algorithm
 * Description:342. 4的幂
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    let ss = n.toString(2);
    let n0 = 0, n1 = 0;
    for (const c of ss) {
        if (c === "0") n0++;
        if (c === "1") n1++;
    }
    return n1 === 1 && n0 % 2 === 0;
};

console.log(isPowerOfFour(64));
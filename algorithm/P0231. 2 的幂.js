/*
 * Author: Deean
 * Date: 2023-06-30 22:47
 * FilePath: algorithm
 * Description:231. 2 的幂
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 0) return false;
    let ss = n.toString(2);
    let cnt = 0;
    for (const c of ss) {
        if (c === "1") {
            cnt++;
        }
    }
    return cnt === 1;
};


console.log(isPowerOfTwo(n = 16));
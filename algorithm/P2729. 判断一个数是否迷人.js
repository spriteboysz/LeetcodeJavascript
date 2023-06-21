/*
 * Author: Deean
 * Date: 2023-06-20 22:47
 * FilePath: algorithm
 * Description:2729. 判断一个数是否迷人
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    let ss = "" + n + n * 2 + n * 3;
    if (ss.length !== 9) return false;
    let digits = new Array(10).fill(0);
    for (const c of ss) {
        digits[c.charCodeAt(0) - "0".charCodeAt(0)] += 1;
    }
    for (let i = 1; i <= 9; i++) {
        if (digits[i] !== 1) return false;
    }
    return true;
};

console.log(isFascinating(n = 192));
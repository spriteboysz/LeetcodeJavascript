/*
 * Author: Deean
 * Date: 2022-09-28 21:23
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let s = x ^ y, cnt = 0;
    while (s !== 0) {
        cnt += s & 1;
        s >>= 1;
    }
    return cnt;
};

console.log(hammingDistance(3, 1));
 
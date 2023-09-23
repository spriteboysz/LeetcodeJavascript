/*
 * Author: Deean
 * Date: 2023-09-23 08:23
 * FilePath: interview
 * Description:面试题 05.01. 插入
 */

/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
    let mask = ((1 << (j - i + 1)) - 1) << i;
    mask = ~mask;
    N &= mask;
    M <<= i;
    return M | N;
};

console.log(insertBits(N = 1024, M = 19, i = 2, j = 6));
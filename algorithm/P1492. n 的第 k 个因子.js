/*
 * Author: Deean
 * Date: 2023-08-07 23:18
 * FilePath: algorithm
 * Description:1492. n 的第 k 个因子
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let factor1 = [], factor2 = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factor1.push(i);
            if (i * i !== n) {
                factor2.unshift(n / i);
            }
        }
    }
    let factor = [...factor1, ...factor2];
    if (factor.length < k) return -1;
    return factor[k - 1];
};

console.log(kthFactor(n = 12, k = 3));
console.log(kthFactor(n = 16, k = 3));
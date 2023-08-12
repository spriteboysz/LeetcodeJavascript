/*
 * Author: Deean
 * Date: 2023-08-12 15:31
 * FilePath: algorithm
 * Description:204. 计数质数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    let cnt = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i] === 0) continue;
        cnt += 1;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = 0;
        }
    }
    return cnt;
};

console.log(countPrimes(n = 100));
/*
 * Author: Deean
 * Date: 2023-08-13 09:43
 * FilePath: algorithm
 * Description:1922. 统计好数字的数目
 */

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    const mod = BigInt(1e9 + 7);
    let exp = BigInt(Math.floor((n + 1) / 2));
    var pow = function (base, exp) {
        if (exp === 0n) return 1n;
        if (exp % 2n === 1n) return pow(base, exp - 1n) * base % mod;
        return pow(base * base % mod, exp / 2n);
    }
    
    return Number(pow(5n, exp) * pow(4n, BigInt(n) - exp) % mod);
};

console.log(countGoodNumbers(n = 50));
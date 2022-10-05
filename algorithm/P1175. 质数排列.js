/*
 * Author: Deean
 * Date: 2022-10-05 14:35
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    const MOD = 10 ** 9 + 7;
    var numPrime = function (n) {
        let arr = [], cnt = 0;
        for (let i = 2; i <= n; i++) {
            if (!arr[i]) {
                cnt++;
                for (let j = i * 2; j <= n; j += i) {
                    arr[j] = true;
                }
            }
        }
        return cnt;
    }


    let cnt = numPrime(n), res = 1;
    for (let i = cnt; i >= 1; i--) {
        res = res % MOD * i;
    }
    for (let i = n - cnt; i >= 1; i--) {
        res = res % MOD * i;
    }
    return res % MOD;

};

console.log(numPrimeArrangements(n = 100));
console.log(numPrimeArrangements(n = 5));

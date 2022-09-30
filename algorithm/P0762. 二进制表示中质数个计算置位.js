/*
 * Author: Deean
 * Date: 2022-09-30 23:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    function isPrime(x) {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; ++i) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    }

    let cnt = 0;
    for (let i = left; i <= right; i++) {
        let num = i, cur = 0;
        while (num > 0) {
            cur += num & 1;
            num >>= 1;
        }
        if (isPrime(cur)) cnt++;
    }
    return cnt;
};

console.log(countPrimeSetBits(10, 15));
 
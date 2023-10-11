/*
 * Author: Deean
 * Date: 2023-10-06 22:06
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let bits = []
    for (let i = 0; i <= n; i++) {
        let num = i, cnt = 0;
        while (num > 0) {
            num &= num - 1
            cnt += 1
        }
        bits.push(cnt);
    }
    return bits;
};

console.log(countBits(5));
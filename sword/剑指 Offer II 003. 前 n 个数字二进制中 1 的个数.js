/*
 * Author: Deean
 * Date: 2022-09-28 23:48
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let counts = [];
    for (let i = 0; i <= n; i++) {
        let cnt = 0, cur = i;
        while (cur > 0) {
            cnt += cur & 1;
            cur >>= 1;
        }
        counts.push(cnt);
    }
    return counts;
};

console.log(countBits(5));
 
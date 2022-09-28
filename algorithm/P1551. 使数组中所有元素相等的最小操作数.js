/*
 * Author: Deean
 * Date: 2022-09-28 21:20
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        let cur = 2 * i + 1;
        if (cur > n) {
            cnt += cur - n;
        }
    }
    return cnt;
};

console.log(minOperations(6));
 
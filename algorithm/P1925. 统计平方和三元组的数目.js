/*
 * Author: Deean
 * Date: 2022/12/18 16:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let cnt = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let c = Math.ceil(Math.sqrt(a * a + b * b));
            if (c <= n && a * a + b * b === c * c) {
                cnt += 1;
            }
        }
    }
    return cnt;
};

console.log(countTriples(5));
console.log(countTriples(10));
console.log(countTriples(12));
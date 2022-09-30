/*
 * Author: Deean
 * Date: 2022-09-30 23:44
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let cnt = 0;
    while (n) {
        n &= n - 1;
        cnt++;
    }
    return cnt;
};

console.log(hammingWeight(128));
 
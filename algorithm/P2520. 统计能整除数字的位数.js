/*
 * Author: Deean
 * Date: 2023/1/10 23:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    const s = num + "";
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (num % s[i] === 0) {
            cnt++;
        }
    }
    return cnt;
};

console.log(countDigits(1024));
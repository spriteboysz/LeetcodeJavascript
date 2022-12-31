/*
 * Author: Deean
 * Date: 2022/12/31 11:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i & 1) {
            s[i] === '0' ? cnt1++ : cnt2++;
        } else {
            s[i] === '1' ? cnt1++ : cnt2++;
        }
    }
    return Math.min(cnt1, cnt2);
};

console.log(minOperations(s = "0100"));
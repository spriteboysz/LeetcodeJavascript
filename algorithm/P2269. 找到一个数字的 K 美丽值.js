/*
 * Author: Deean
 * Date: 2023-03-01 22:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let cnt = 0, s = num.toString();
    for (let i = 0; i + k <= s.length; i++) {
        let cur = Number(s.slice(i, i + k));
        console.log(cur);
        if (cur !== 0 && num % cur === 0) {
            cnt += 1
        }
    }
    return cnt;
};

console.log(divisorSubstrings(430043, 2));
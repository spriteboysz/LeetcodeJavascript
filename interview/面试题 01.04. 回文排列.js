/*
 * Author: Deean
 * Date: 2023-08-14 23:06
 * FilePath: interview
 * Description:面试题 01.04. 回文排列
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    let map = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    let cnt = 0;
    map.forEach((v, _) => {
        if (v % 2 !== 0) {
            cnt++;
        }
    });
    return cnt <= 1;
};

console.log(canPermutePalindrome("tactcoa"));
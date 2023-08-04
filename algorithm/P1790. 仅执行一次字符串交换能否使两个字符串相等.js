/*
 * Author: Deean
 * Date: 2023-08-02 22:57
 * FilePath: algorithm
 * Description:1790. 仅执行一次字符串交换能否使两个字符串相等
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true;
    let diff = [];
    for (let i = 0, n = s1.length; i < n; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(s1[i]);
            diff.push(s2[i]);
        }
    }
    return diff.length === 4 && diff[0] === diff[3] && diff[1] === diff[2];
};

console.log(areAlmostEqual(s1 = "bank", s2 = "kanb"));
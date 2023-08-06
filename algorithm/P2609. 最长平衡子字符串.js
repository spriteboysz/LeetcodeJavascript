/*
 * Author: Deean
 * Date: 2023-08-06 19:44
 * FilePath: algorithm
 * Description:2609. 最长平衡子字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
    for (let i = 25; i >= 0; i--) {
        if (s.includes("0".repeat(i) + "1".repeat(i))) {
            return i * 2;
        }
    }
    return -1;
};

console.log(findTheLongestBalancedSubstring(s = "01000111"));
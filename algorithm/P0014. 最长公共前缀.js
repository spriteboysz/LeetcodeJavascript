/*
 * Author: Deean
 * Date: 2023-07-03 22:50
 * FilePath: algorithm
 * Description:14. 最长公共前缀
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0];
    let n = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < Math.min(n, strs[i].length); j++) {
            if (common[j] !== strs[i][j]) {
                break;
            }
        }
        common = common.substring(0, j);
        if (common === "") return "";
    }
    return common;
};

console.log(longestCommonPrefix(strs = ["flower", "flow", "flight", "b"]));
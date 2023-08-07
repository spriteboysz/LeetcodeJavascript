/*
 * Author: Deean
 * Date: 2023-08-06 22:24
 * FilePath: algorithm
 * Description:1910. 删除一个字符串中所有出现的给定子字符串
 */

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let n = s.length, m = part.length, stack = [];
    for (let i = 0; i < n; i++) {
        if (stack.length < m - 1) {
            stack.push(s[i]);
        } else if (stack.slice(stack.length - m + 1).join("") === part.slice(0, m - 1) && s[i] === part[part.length - 1]) {
            for (let j = 0; j < m - 1; j++) {
                stack.pop();
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};

console.log(removeOccurrences(s = "daabcbaabcbc", part = "abc"));
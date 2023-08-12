/*
 * Author: Deean
 * Date: 2023-08-12 14:08
 * FilePath: algorithm
 * Description:71. 简化路径
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let paths = path.split("/");
    let stack = [];
    for (const p of paths) {
        if (p === '' || p === '.') continue;
        if (p === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(p);
        }
    }
    return "/" + stack.join("/")
};

console.log(simplifyPath(path = "/a/./b/../../c/"));
console.log(simplifyPath(path = "/home//foo/"));
/*
 * Author: Deean
 * Date: 2023-10-08 23:08
 * FilePath: LCP
 * Description: LCR 122. 路径加密
 */

/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function (path) {
    return path.replaceAll(".", " ");
};

console.log(pathEncryption(path = "a.aef.qerf.bb"));
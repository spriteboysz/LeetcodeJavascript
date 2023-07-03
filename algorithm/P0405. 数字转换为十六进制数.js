/*
 * Author: Deean
 * Date: 2023-07-02 23:26
 * FilePath: algorithm
 * Description:405. 数字转换为十六进制数
 */


/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    return num < 0 ? (Math.pow(2, 32) + num).toString(16) : num.toString(16);
};

console.log(toHex(26));
console.log(toHex(-1));
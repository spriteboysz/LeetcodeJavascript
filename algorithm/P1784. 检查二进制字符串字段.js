/*
 * Author: Deean
 * Date: 2023-07-01 23:09
 * FilePath: algorithm
 * Description:1784. 检查二进制字符串字段
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return !s.includes("01");
};

console.log(checkOnesSegment(s = "1001"));
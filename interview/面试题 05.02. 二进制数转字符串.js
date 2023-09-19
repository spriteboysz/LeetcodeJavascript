/*
 * Author: Deean
 * Date: 2023-09-18 23:33
 * FilePath: interview
 * Description:面试题 05.02. 二进制数转字符串
 */

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    var bin = "0.";
    while (bin.length <= 32 && num > 0) {
        num *= 2;
        if (num >= 1) {
            bin += 1;
            num -= 1;
        } else {
            bin += 0;
        }
    }
    return bin.length === 33 ? "ERROR" : bin;
};

console.log(printBin(0.625));
console.log(printBin(0.1));
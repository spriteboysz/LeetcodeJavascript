/*
 * Author: Deean
 * Date: 2023-06-11 21:55
 * FilePath: algorithm
 * Description:2710. 移除字符串中的尾随零
 */

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] !== "0") {
            return num.substring(0, i + 1);
        }
    }
};

console.log(removeTrailingZeros(num = "51230100"));
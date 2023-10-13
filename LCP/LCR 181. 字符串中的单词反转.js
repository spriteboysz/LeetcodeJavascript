/*
 * Author: Deean
 * Date: 2023-10-09 23:54
 * FilePath: LCP
 * Description: LCR 181. 字符串中的单词反转
 */


/**
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function (message) {
    return message.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseMessage("the sky is blue"));
/*
 * Author: Deean
 * Date: 2023-09-22 23:01
 * FilePath: interview
 * Description:面试题 10.05. 稀疏数组搜索
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === s) {
            return i;
        }
    }
    return -1;
};
console.log(findString(words = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], s = "ball"));
/*
 * Author: Deean
 * Date: 2023-02-28 22:57
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
    if (!words.includes(target)) {
        return -1;
    }
    const arr = [...words, ...words, ...words];
    startIndex = startIndex + words.length;
    if (arr[startIndex] === target) {
        return 0;
    }
    let dis = 0;
    while (true) {
        if (arr[startIndex - dis] === target || arr[startIndex + dis] === target) {
            return dis;
        }
        dis++;
    }
};

console.log(closetTarget(words = ["hello", "i", "am", "leetcode", "hello"], target = "hello", startIndex = 1));
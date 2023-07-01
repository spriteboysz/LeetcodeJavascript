/*
 * Author: Deean
 * Date: 2023-07-01 16:15
 * FilePath: algorithm
 * Description:744. 寻找比目标字母大的最小字母
 */


/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
var nextGreatestLetter = function (letters, target) {
    for (const letter of letters) {
        if (letter > target) {
            return letter;
        }
    }
    return letters[0];
};

console.log(nextGreatestLetter(letters = ["c", "f", "j"], target = "a"));
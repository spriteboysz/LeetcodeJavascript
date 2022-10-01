/*
 * Author: Deean
 * Date: 2022-10-01 11:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let map = new Map();
    keyboard.forEach((row, i) => {
        row.split("").forEach((c) => {
            map.set(c, i);
        });
    });
    return words.filter((word) => {
        return new Set(word.split("").map((c) =>
            map.get(c.toLowerCase()))
        ).size === 1;
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
 
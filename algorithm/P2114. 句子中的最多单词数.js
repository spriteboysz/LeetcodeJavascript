/*
 * Author: Deean
 * Date: 2022-09-25 23:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let maximum = 0;
    for (const s of sentences) {
        let cur = s.split(" ");
        maximum = Math.max(maximum, cur.length);
    }
    return maximum;
};

console.log(mostWordsFound(sentences = ["please wait", "continue to fight", "continue to win"]));
 
/*
 * Author: Deean
 * Date: 2022-09-27 23:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let set = new Set();
    for (const word of words) {
        let str = "";
        for (const c of word) {
            str += morse[c.charCodeAt(0) - 97];
        }
        set.add(str);
    }
    return set.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
 
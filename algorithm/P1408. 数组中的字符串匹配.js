/*
 * Author: Deean
 * Date: 2022/12/18 22:30
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let match = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].search(words[i]) !== -1) {
                match.push(words[i]);
                break;
            }
        }
    }
    return match;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
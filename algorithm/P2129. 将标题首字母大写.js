/*
 * Author: Deean
 * Date: 2022-10-04 20:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let words = title.split(" ");
    for (const [i, word] of words.entries()) {
        if (word.length <= 2) {
            words[i] = word.toLowerCase();
        } else {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1,).toLowerCase();
        }
    }
    return words.join(" ");
};

console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));

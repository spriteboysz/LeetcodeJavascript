/*
 * Author: Deean
 * Date: 2022-10-03 21:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let words = sentence.split(" ");
    for (const [i, word] of words.entries()) {
        if (!"aeiou".includes(word.charAt(0).toLowerCase())) {
            words[i] = word.slice(1,) + word.charAt(0);
        }
        words[i] += "ma" + "a".repeat(i + 1);
    }
    return words.join(" ");
};

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
 
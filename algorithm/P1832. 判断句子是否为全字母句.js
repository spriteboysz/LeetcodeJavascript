/*
 * Author: Deean
 * Date: 2022-09-28 21:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    return new Set(sentence).size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
 
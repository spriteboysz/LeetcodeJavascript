/*
 * Author: Deean
 * Date: 2022-10-04 15:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    words.sort((a, b) => a.length - b.length);
    const alphabet = new Array(26).fill(0);
    for (const c of licensePlate) {
        const index = c.toLowerCase().charCodeAt(0) - 97;
        if (index >= 0 && index < 26) alphabet[index]++;
    }

    for (const word of words) {
        const temp = [...alphabet];
        for (const c of word) {
            const index = c.toLowerCase().charCodeAt(0) - 97;
            if (temp[index] > 0) temp[index]--;
        }
        if (temp.join("") === new Array(26).fill(0).join("")) {
            return word;
        }
    }
};

console.log(shortestCompletingWord(licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]));
 
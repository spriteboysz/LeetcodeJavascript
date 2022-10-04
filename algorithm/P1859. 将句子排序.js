/*
 * Author: Deean
 * Date: 2022-10-04 11:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    return s.split(" ")
        .map(word => {
            let last = word.length - 1;
            return [word.slice(0, last), parseInt(word.charAt(last))];
        }).sort((a, b) => a[1] - b[1])
        .map(v => v[0]).join(" ");
};

console.log(sortSentence("Myself2 Me1 I4 and3"));
 
/*
 * Author: Deean
 * Date: 2022-10-04 22:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    let w = words.map(word => word.split(''))
    for (let i = w.length - 1; i > 0; i--)
        if ([...w[i]].sort().join('') === [...w[i - 1]].sort().join(''))
            w.splice(i, 1)
    return w.map(_ => _.join(''))
};

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
 
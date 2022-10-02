/*
 * Author: Deean
 * Date: 2022-10-02 23:33
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();
    for (const word of arr) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    for (const word of arr) {
        if (map.get(word) === 1) k--;
        if (k === 0) return word;
    }
    return "";
};

console.log(kthDistinct(arr = ["aaa", "aa", "a"], k = 1));
console.log(kthDistinct(arr = ["aaa", "aa", "a"], k = 4));

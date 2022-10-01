/*
 * Author: Deean
 * Date: 2022-10-01 12:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const map = new Map();
    s.split("").forEach((c) => {
        map.set(c, (map.get(c) || 0) + 1);
    });
    return new Set(map.values()).size === 1;
};

console.log(areOccurrencesEqual("abacbc"));
 
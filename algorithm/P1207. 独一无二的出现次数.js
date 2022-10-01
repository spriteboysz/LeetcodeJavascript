/*
 * Author: Deean
 * Date: 2022-10-01 14:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.values()].length === new Set([...map.values()]).size;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
 
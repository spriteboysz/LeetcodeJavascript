/*
 * Author: Deean
 * Date: 2022-09-30 22:12
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    let map = new Map();
    items1.forEach((v) => {
        map.set(v[0], (map.get(v[0]) || 0) + v[1]);
    });
    items2.forEach((v) => {
        map.set(v[0], (map.get(v[0]) || 0) + v[1]);
    });
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
};

console.log(mergeSimilarItems(items1 = [[1, 1], [3, 2], [2, 3]],
    items2 = [[2, 1], [3, 2], [1, 3]]));
 
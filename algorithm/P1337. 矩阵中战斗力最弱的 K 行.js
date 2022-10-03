/*
 * Author: Deean
 * Date: 2022-10-03 15:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const map = new Map();
    mat.forEach((a, i) => map.set(a, i));
    mat.sort();
    return Array.from({length: k}, (_, i) => map.get(mat[i]));
};

console.log(kWeakestRows([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]], 2));
 
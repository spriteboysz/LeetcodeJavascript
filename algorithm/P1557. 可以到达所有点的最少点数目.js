/*
 * Author: Deean
 * Date: 2022-10-02 18:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let src = new Set(), dst = new Set();
    edges.forEach((v) => {
        src.add(v[0]);
        dst.add(v[1]);
    });
    // console.log(src, dst)
    return Array.from(src).filter((item) => !dst.has(item));
};

console.log(findSmallestSetOfVertices(n = 5, edges = [[0, 1], [2, 1], [3, 1], [1, 4], [2, 4]]));
 
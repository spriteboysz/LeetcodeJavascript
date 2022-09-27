/*
 * Author: Deean
 * Date: 2022-09-27 23:16
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    let [a, b, , d, e] = s.split("").map((c) => c.charCodeAt(0));
    let cells = [];
    for (let i = a; i <= d; i++) {
        for (let j = b; j <= e; j++) {
            cells.push(String.fromCharCode(i) + String.fromCharCode(j));
        }
    }
    return cells;
};

console.log(cellsInRange(s = "K1:L2"));
 
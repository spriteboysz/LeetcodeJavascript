/*
 * Author: Deean
 * Date: 2022/12/18 16:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    let cells = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cells.push([i, j]);
        }
    }
    return cells.sort((cell1, cell2) => {
        let x1 = cell1[0], y1 = cell1[1], x2 = cell2[0], y2 = cell2[1];
        return ((Math.abs(x1 - rCenter) + Math.abs(y1 - cCenter)) - (Math.abs(x2 - rCenter) + Math.abs(y2 - cCenter)));
    })
};

console.log(allCellsDistOrder(rows = 2, cols = 2, rCenter = 0, cCenter = 1));
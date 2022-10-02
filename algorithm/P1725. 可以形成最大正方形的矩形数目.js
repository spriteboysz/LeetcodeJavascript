/*
 * Author: Deean
 * Date: 2022-10-02 14:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let side = rectangles.map((v) => Math.min(...v));
    let maximum = Math.max(...side);
    return side.filter(item => item === maximum).length;
};

console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]));
 
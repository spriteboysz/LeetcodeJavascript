/*
 * Author: Deean
 * Date: 2022-10-04 21:03
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    for (let i = Math.floor(Math.sqrt(area)); i >= 1; i--) {
        if (area % i === 0) return [area / i, i];
    }
};

console.log(constructRectangle(122122));
 
/*
 * Author: Deean
 * Date: 2022-10-02 21:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    return (coordinates.charCodeAt(0) + coordinates.charCodeAt(1)) % 2 === 1;
};
console.log(squareIsWhite("h3"));
console.log(squareIsWhite("a1"));
console.log(squareIsWhite("c7"));

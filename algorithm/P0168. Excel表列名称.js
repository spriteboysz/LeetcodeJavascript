/*
 * Author: Deean
 * Date: 2022-10-04 09:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let title = [];
    while (columnNumber > 0) {
        let cur = (columnNumber - 1) % 26 + 1;
        title.push(String.fromCharCode("A".charCodeAt(0) + cur - 1));
        columnNumber = Math.floor((columnNumber - cur) / 26);
    }
    return title.reverse().join("");
};

console.log(convertToTitle(701));
 
/*
 * Author: Deean
 * Date: 2022-10-04 09:16
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let num = 0;
    for (const c of columnTitle) {
        num = num * 26 + c.charCodeAt(0) - 64;
    }
    return num;
};

console.log(titleToNumber("ZY"));
 
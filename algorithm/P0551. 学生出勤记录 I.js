/*
 * Author: Deean
 * Date: 2022-10-05 14:20
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    return s.split("A").length - 1 < 2 && !s.includes("LLL");
};

console.log(checkRecord("PPAAAALLP"));
console.log(checkRecord("PPALLL"));

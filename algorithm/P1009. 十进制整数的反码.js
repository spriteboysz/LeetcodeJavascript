/*
 * Author: Deean
 * Date: 2022-10-03 10:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    return parseInt(n
        .toString(2)
        .split("")
        .map((item) => (1 - parseInt(item)).toString())
        .join(""), 2);
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));

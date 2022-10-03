/*
 * Author: Deean
 * Date: 2022-10-03 10:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    return parseInt(num
        .toString(2)
        .split("")
        .map((item) => (1 - parseInt(item)).toString())
        .join(""), 2);
};

console.log(findComplement(5));
 
/*
 * Author: Deean
 * Date: 2022-09-27 00:03
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let number = n.toString().split("").map((c) => parseInt(c));
    return number.reduce((a, b) => {
            return a * b
        }
    ) - number.reduce((a, b) => {
        return a + b
    });
};

console.log(subtractProductAndSum(n = 4421));
 
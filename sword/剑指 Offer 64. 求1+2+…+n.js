/*
 * Author: Deean
 * Date: 2022-09-25 23:09
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    if (n === 1) {
        return 1;
    } else {
        return sumNums(n - 1) + n;
    }
};

console.log(sumNums(9));
 
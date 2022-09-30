/*
 * Author: Deean
 * Date: 2022-09-30 23:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    let cnt = 0;
    while (num1 * num2 > 0) {
        if (num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        cnt++;
    }
    return cnt;
};

console.log(countOperations(2, 3));
 
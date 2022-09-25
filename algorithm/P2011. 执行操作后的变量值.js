/*
 * Author: Deean
 * Date: 2022-09-25 22:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let sum = 0;
    for (const operation of operations) {
        if (operation.includes("+")) {
            sum++;
        } else {
            sum--;
        }
    }
    return sum;
};

console.log(finalValueAfterOperations(operations = ["X++", "++X", "--X", "X--"]));
 
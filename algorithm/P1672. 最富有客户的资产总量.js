/*
 * Author: Deean
 * Date: 2022-09-25 22:23
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maximum = 0;
    for (const account of accounts) {
        let cur = 0;
        for (const val of account) {
            cur += val;
        }
        maximum = Math.max(maximum, cur);
    }
    return maximum;
};

console.log(maximumWealth(accounts = [[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth(accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]));

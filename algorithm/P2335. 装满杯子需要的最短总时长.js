/*
 * Author: Deean
 * Date: 2022-10-05 14:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let cnt = 0;
    while (amount[0] || amount[1] || amount[2]) {
        amount.sort((a, b) => a - b);
        if (amount[0] === 0 && amount[1] === 0) {
            cnt += amount[2];
            return cnt;
        } else if (amount[0] === 0) {
            amount[1]--;
            amount[2]--;
        } else {
            amount[0]--;
            amount[2]--;
        }
        cnt++;
    }
    return cnt;
};

console.log(fillCups([5, 4, 4]));
 
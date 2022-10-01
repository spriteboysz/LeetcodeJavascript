/*
 * Author: Deean
 * Date: 2022-10-01 11:21
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let even = 0, odd = 0;
    position.forEach((coin) => {
        if (coin % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    });
    return even <= odd ? even : odd;
};

console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
 
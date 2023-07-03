/*
 * Author: Deean
 * Date: 2023-07-02 19:07
 * FilePath: algorithm
 * Description:1523. 在区间范围内统计奇数数目
 */


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    if (low % 2 === 1) low -= 1;
    if (high % 2 === 1) high += 1;
    return (high - low) / 2;
};

console.log(countOdds(low = 3, high = 7));
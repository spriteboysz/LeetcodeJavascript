/*
 * Author: Deean
 * Date: 2022-10-02 17:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let num = start ^ goal, cnt = 0;
    while (num) {
        num &= (num - 1);
        cnt++;
    }
    return cnt;
};

console.log(minBitFlips(start = 3, goal = 4));
 
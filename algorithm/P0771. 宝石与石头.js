/*
 * Author: Deean
 * Date: 2022-09-27 23:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let cnt = 0;
    for (const stone of stones) {
        if (jewels.split("").includes(stone)) cnt++;
    }
    return cnt;
};

console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"));
 
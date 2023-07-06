/*
 * Author: Deean
 * Date: 2023-07-05 22:18
 * FilePath: algorithm
 * Description:1854. 人口最多的年份
 */


/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    let years = new Array(101).fill(0);
    for (const [s, e] of logs) {
        years[s - 1950] += 1;
        years[e - 1950] -= 1;
    }
    let cur = 0, max = 0, m = 0;
    for (let i = 0; i < 101; i++) {
        cur += years[i];
        if (cur > m) {
            m = cur;
            max = 1950 + i;
        }
    }
    return max;
};

console.log(maximumPopulation(logs = [[1993, 1999], [2000, 2010]]));
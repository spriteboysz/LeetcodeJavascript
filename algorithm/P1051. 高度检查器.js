/*
 * Author: Deean
 * Date: 2022-09-28 22:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let clone = heights.slice(), cnt = 0;
    heights.sort((a, b) => a - b).forEach((v, i) => {
        if (v !== clone[i]) cnt++;
    });
    return cnt;
};

console.log(heightChecker([5, 1, 2, 3, 4]));
 
/*
 * Author: Deean
 * Date: 2022-10-02 23:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let cnt = 0, cur = 'a';
    for (const c of word.split("")) {
        let step = Math.abs(cur.charCodeAt(0) - c.charCodeAt(0));
        let index = step > 13 ? 26 - step : step;
        cnt += index + 1;
        cur = c;
    }
    return cnt;
};
console.log(minTimeToType("zjpc"));
 
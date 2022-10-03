/*
 * Author: Deean
 * Date: 2022-10-03 19:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let lucky = [];
    for (const [k, v] of map) {
        if (k === v) lucky.push(k);
    }
    return lucky.length === 0 ? -1 : Math.max(...lucky);
};

console.log(findLucky([1, 2, 2, 3, 3, 3]));
 
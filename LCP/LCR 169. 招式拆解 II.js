/*
 * Author: Deean
 * Date: 2023-10-09 23:15
 * FilePath: LCP
 * Description: LCR 169. 招式拆解 II
 */

/**
 * @param {string} arr
 * @return {string}
 */
var dismantlingAction = function (arr) {
    let map = new Map();
    for (let c of arr) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (let c of arr) {
        if (map.get(c) === 1) {
            return c;
        }
    }
    return " ";
};

console.log(dismantlingAction(arr = "abbccdeff"));
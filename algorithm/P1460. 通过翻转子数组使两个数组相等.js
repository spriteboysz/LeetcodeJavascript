/*
 * Author: Deean
 * Date: 2022-09-29 23:49
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    return target.sort((a, b) => a - b).join(",") ===
        arr.sort((a, b) => a - b).join(",");
};

console.log(canBeEqual(target = [1, 2, 3, 4], arr = [2, 4, 1, 3]));
 
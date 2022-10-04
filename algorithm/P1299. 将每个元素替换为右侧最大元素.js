/*
 * Author: Deean
 * Date: 2022-10-04 10:51
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let maximum = [], cur = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        maximum.push(cur);
        cur = Math.max(cur, arr[i]);
    }
    return maximum.reverse();
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
 
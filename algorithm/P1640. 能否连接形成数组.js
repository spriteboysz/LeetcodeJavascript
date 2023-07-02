/*
 * Author: Deean
 * Date: 2023-07-01 23:22
 * FilePath: algorithm
 * Description:1640. 能否连接形成数组
 */

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    pieces.sort((a, b) => map.get(a[0]) - map.get(b[0]));
    let arr2 = [];
    for (const piece of pieces) {
        arr2.push(...piece);
    }
    if (arr.length !== arr2.length) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

console.log(canFormArray(arr = [91, 4, 64, 78], pieces = [[78], [4, 64], [91]]));
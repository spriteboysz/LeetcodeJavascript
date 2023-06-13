/*
 * Author: Deean
 * Date: 2023-06-12 23:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};

arr = [1, 2, 3]
let fn = function plusone(n) {
    return n + 1;
}
console.log(map(arr, fn));
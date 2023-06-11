/*
 * Author: Deean
 * Date: 2023-06-11 17:14
 * FilePath: algorithm
 * Description:2724. 排序方式
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

arr = [5, 4, 1, 2, 3]
fn = (x) => x
console.log(sortBy(arr, fn));
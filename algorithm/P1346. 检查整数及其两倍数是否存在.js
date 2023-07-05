/*
 * Author: Deean
 * Date: 2023-07-04 23:02
 * FilePath: algorithm
 * Description:1346. 检查整数及其两倍数是否存在
 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let set = new Set();
    arr.sort((a, b) => Math.abs(b) - Math.abs(a));
    for (const num of arr) {
        if (set.has(num * 2)) {
            return true;
        }
        set.add(num);
    }
    return false;
};

console.log(checkIfExist(arr = [10, 2, 5, 3]));
console.log(checkIfExist(arr = [-10, 12, -20, -8, 15]));
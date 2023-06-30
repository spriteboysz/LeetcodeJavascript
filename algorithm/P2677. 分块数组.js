/*
 * Author: Deean
 * Date: 2023-06-29 23:18
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let arr2 = [];
    for (let i = 0, n = arr.length; i < n; i += size) {
        let nums = [];
        for (let j = 0; j < size && i + j < n; j++) {
            nums.push(arr[i + j]);
        }
        arr2.push(nums);
    }
    return arr2;
};

console.log(chunk(arr = [1, 9, 6, 3, 2], size = 3));
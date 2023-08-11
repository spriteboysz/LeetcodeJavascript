/*
 * Author: Deean
 * Date: 2023-08-11 21:19
 * FilePath: algorithm
 * Description:2610. 转换二维数组
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let matrix = new Array(Math.max(...map.values()));
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [];
    }
    map.forEach((v, k) => {
        for (let i = 0; i < v; i++) {
            matrix[i].push(k);
        }
    })
    return matrix;
};

console.log(findMatrix(nums = [1, 3, 4, 1, 2, 3, 1]));
/*
 * Author: Deean
 * Date: 2022-10-04 15:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    let number = new Array(1001).fill(0);
    for (const num of nums) {
        for (const item of num) {
            number[item]++;
        }
    }
    return number.map((num, i) => {
        if (num === nums.length) return i;
    }).filter(item => item);
};

console.log(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]));
console.log(intersection([[1, 2, 3], [4, 5, 6]]));

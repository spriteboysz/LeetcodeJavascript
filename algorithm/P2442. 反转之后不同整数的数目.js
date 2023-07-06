/*
 * Author: Deean
 * Date: 2023-07-05 22:31
 * FilePath: algorithm
 * Description:2442. 反转之后不同整数的数目
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let visited = new Set();
    for (const num of nums) {
        visited.add(num);
        visited.add(parseInt(num.toString().split("").reverse().join("")));
    }
    return visited.size;
};

console.log(countDistinctIntegers(nums = [1, 13, 10, 12, 31]));
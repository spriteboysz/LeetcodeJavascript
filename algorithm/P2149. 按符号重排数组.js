/*
 * Author: Deean
 * Date: 2022-10-02 19:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let positive = [], negative = [];
    for (const num of nums) {
        if (num > 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }
    let arr = [];
    for (let i = 0; i < positive.length; i++) {
        arr.push(positive[i]);
        arr.push(negative[i]);
    }
    return arr;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
 
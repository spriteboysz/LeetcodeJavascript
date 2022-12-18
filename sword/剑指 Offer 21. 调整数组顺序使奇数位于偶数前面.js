/*
 * Author: Deean
 * Date: 2022/12/18 22:23
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let odd = [], even = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return [...odd, ...even];
};

console.log(exchange([1, 2, 3, 4]));
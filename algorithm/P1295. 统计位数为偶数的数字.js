/*
 * Author: Deean
 * Date: 2022-10-02 19:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    return nums.filter((num) => {
        return num.toString().length % 2 === 0;
    }).length;
};

console.log(findNumbers([555, 901, 482, 1771]));
 
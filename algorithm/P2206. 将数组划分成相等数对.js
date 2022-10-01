/*
 * Author: Deean
 * Date: 2022-10-01 11:30
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const map = new Map();
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    return [...map.values()].every((num) => num % 2 === 0);
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
 
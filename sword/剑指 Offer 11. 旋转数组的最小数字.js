/*
 * Author: Deean
 * Date: 2023-03-03 22:29
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    return numbers.sort((a, b) => a - b)[0];
};

console.log(minArray([3, 4, 5, 1, 2]));
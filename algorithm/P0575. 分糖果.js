/*
 * Author: Deean
 * Date: 2022-10-03 08:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    return Math.min(candyType.length / 2, new Set(candyType).size);
};

console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([1, 1, 1, 1]));

/*
 * Author: Deean
 * Date: 2022-09-26 23:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maximum = [], max = Math.max(...candies);
    for (const candy of candies) {
        maximum.push(candy + extraCandies >= max);
    }
    return maximum;
};

console.log(kidsWithCandies(candies = [4, 2, 1, 1, 2], extraCandies = 1));
 
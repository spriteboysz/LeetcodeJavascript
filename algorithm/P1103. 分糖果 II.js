/*
 * Author: Deean
 * Date: 2023-08-03 23:02
 * FilePath: algorithm
 * Description:1103. 分糖果 II
 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let distribute = Array(num_people).fill(0), i = 0
    while (candies > 0) {
        distribute[i % num_people] += Math.min(i + 1, candies)
        candies -= i + 1;
        i++;
    }
    return distribute;
};

console.log(distributeCandies(candies = 7, num_people = 4));
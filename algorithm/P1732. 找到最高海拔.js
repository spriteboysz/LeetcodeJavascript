/*
 * Author: Deean
 * Date: 2022-10-02 20:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let maximum = 0, cur = 0;
    for (const num of gain) {
        cur += num;
        maximum = Math.max(maximum, cur);
    }
    return maximum;
};
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
console.log(largestAltitude([-5, 1, 5, 0, -7]));

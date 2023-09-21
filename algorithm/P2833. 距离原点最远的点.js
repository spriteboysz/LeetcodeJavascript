/*
 * Author: Deean
 * Date: 2023-09-20 23:50
 * FilePath: algorithm
 * Description:2833. 距离原点最远的点
 */

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    var distance = 0, other = 0;
    for (let move of moves) {
        if (move === "R") {
            distance++;
        } else if (move === "L") {
            distance--;
        } else {
            other++;
        }
    }
    return Math.abs(distance) + other;
};

console.log(furthestDistanceFromOrigin(moves = "_R__LL_"));
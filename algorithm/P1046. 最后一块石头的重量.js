/*
 * Author: Deean
 * Date: 2022-10-03 19:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let a = stones.pop(), b = stones.pop();
        if (a > b) stones.push(a - b);
    }
    return stones.length === 0 ? 0 : stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
 
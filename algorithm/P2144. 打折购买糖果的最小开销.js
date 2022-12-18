/*
 * Author: Deean
 * Date: 2022/12/18 17:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let min = 0;
    for (let i = 0; i < cost.length; i++) {
        if (i % 3 === 2) continue;
        min += cost[i];
    }
    return min;
};


console.log(minimumCost(cost = [6, 5, 7, 9, 2, 2]));
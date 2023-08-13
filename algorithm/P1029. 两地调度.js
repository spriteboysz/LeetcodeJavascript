/*
 * Author: Deean
 * Date: 2023-08-13 17:03
 * FilePath: algorithm
 * Description:1029. 两地调度
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let left = 0, right = costs.length - 1, cost = 0;
    while (left <= right) {
        cost += costs[left++][0] + costs[right--][1];
    }
    return cost;
};

console.log(twoCitySchedCost(costs = [[10, 20], [30, 200], [400, 50], [30, 20]]));
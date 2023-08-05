/*
 * Author: Deean
 * Date: 2023-08-05 22:12
 * FilePath: algorithm
 * Description:2240. 买钢笔和铅笔的方案数
 */

/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
    if (cost1 < cost2) {
        [cost1, cost2] = [cost2, cost1]
    }
    let cnt = 0;
    for (let i = 0; i <= Math.floor(total / cost1); i++) {
        cnt += Math.floor((total - i * cost1) / cost2) + 1;
    }
    return cnt;
};

console.log(waysToBuyPensPencils(total = 20, cost1 = 10, cost2 = 5));
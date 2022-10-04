/*
 * Author: Deean
 * Date: 2022-10-04 15:17
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function (gem, operations) {
    for (const operation of operations) {
        let [src, dst] = operation;
        let cur = Math.floor(gem[src] / 2);
        gem[src] -= cur;
        gem[dst] += cur;
    }
    return Math.max(...gem) - Math.min(...gem);
};

console.log(giveGem(gem = [100, 0, 50, 100], operations = [[0, 2], [0, 1], [3, 0], [3, 0]]));
 
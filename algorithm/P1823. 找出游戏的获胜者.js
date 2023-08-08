/*
 * Author: Deean
 * Date: 2023-08-06 22:47
 * FilePath: algorithm
 * Description:1823. 找出游戏的获胜者
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    if (n === 1) {
        return 1;
    }
    return (k + findTheWinner(n - 1, k) - 1) % n + 1;
};

console.log(findTheWinner(n = 5, k = 2));
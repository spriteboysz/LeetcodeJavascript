/*
 * Author: Deean
 * Date: 2023-08-06 22:02
 * FilePath: algorithm
 * Description:2225. 找出输掉零场或一场比赛的玩家
 */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let winners = new Map(), loosers = new Map();
    for (const match of matches) {
        let [winner, looser] = match;
        winners.set(winner, (winners.get(winner) || 0) + 1);
        loosers.set(looser, (loosers.get(looser) || 0) + 1);
    }
    let looser0 = [], looser1 = [];
    for (const key of winners.keys()) {
        if (!loosers.get(key)) {
            looser0.push(key);
        }
    }
    loosers.forEach((v, k) => {
        if (v === 1) {
            looser1.push(k);
        }
    });
    looser0.sort((a, b) => a - b);
    looser1.sort((a, b) => a - b);
    return [looser0, looser1];
};

console.log(findWinners(matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
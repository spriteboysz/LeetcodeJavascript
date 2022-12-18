/*
 * Author: Deean
 * Date: 2022/12/18 22:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    let map = new Map();
    let relative = new Array(score.length);
    for (let i = 0; i < score.length; i++) {
        map.set(score[i], i);
    }
    score = score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        relative[map.get(score[i])] = i <= 2 ? desc[i] : [i + 1] + "";
    }
    return relative;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
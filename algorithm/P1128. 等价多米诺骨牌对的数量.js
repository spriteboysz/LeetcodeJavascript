/*
 * Author: Deean
 * Date: 2023-07-02 17:14
 * FilePath: algorithm
 * Description:1128. 等价多米诺骨牌对的数量
 */


/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let map = new Array(100).fill(0);
    let pairs = 0;
    for (const [a, b] of dominoes) {
        let val = Math.min(a, b) * 10 + Math.max(a, b);
        pairs += map[val];
        map[val] += 1;
    }
    return pairs;
};

console.log(numEquivDominoPairs(dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]]));
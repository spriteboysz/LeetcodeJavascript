/*
 * Author: Deean
 * Date: 2023-07-02 17:29
 * FilePath: algorithm
 * Description:997. 找到小镇的法官
 */


/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let inbound = new Array(n + 1).fill(0);
    let outbound = new Array(n + 1).fill(0);
    for (const [a, b] of trust) {
        inbound[b] += 1;
        outbound[a] += 1;
    }
    
    for (let i = 1; i <= n; i++) {
        if (inbound[i] === n - 1 && outbound[i] === 0) {
            return i;
        }
    }
    return -1;
};

console.log(findJudge(n = 3, trust = [[1, 3], [2, 3]]));
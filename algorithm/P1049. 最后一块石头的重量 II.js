/*
 * Author: Deean
 * Date: 2022-10-03 16:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    if (stones === null || stones.length === 0) return 0;
    let sum = 0;
    stones.forEach(element => sum += element)

    let mid = sum >> 1;
    let dp = new Array(mid + 1).fill(0);
    for (let i = 0; i < stones.length; i++) {
        for (let j = mid; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], stones[i] + dp[j - stones[i]]);
        }
    }
    return (sum - 2 * dp[mid]);
};

console.log(lastStoneWeightII([31, 26, 33, 21, 40]));
 
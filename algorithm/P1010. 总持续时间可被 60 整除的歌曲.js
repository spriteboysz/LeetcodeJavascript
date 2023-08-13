/*
 * Author: Deean
 * Date: 2023-08-13 17:13
 * FilePath: algorithm
 * Description:1010. 总持续时间可被 60 整除的歌曲
 */

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let cnt = new Array(60).fill(0);
    for (const num of time) {
        cnt[num % 60]++;
    }
    let res = 0;
    for (let i = 1; i < 30; i++) {
        res += cnt[i] * cnt[60 - i];
    }
    res += cnt[0] * (cnt[0] - 1) / 2 + cnt[30] * (cnt[30] - 1) / 2;
    return res;
};

console.log(numPairsDivisibleBy60(time = [30, 20, 150, 100, 40]));
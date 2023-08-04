/*
 * Author: Deean
 * Date: 2023-08-04 21:40
 * FilePath: algorithm
 * Description:2379. 得到 K 个黑块的最少涂色次数
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let left = 0, right = 0, cnt = 0;
    while (right < k) {
        cnt += blocks[right] === 'W' ? 1 : 0;
        right++;
    }
    let res = cnt;
    while (right < blocks.length) {
        cnt += blocks[right] === 'W' ? 1 : 0;
        cnt -= blocks[left] === 'W' ? 1 : 0;
        res = Math.min(res, cnt);
        left++;
        right++;
    }
    return res;
};

console.log(minimumRecolors(blocks = "WBBWWBBWBW", k = 7));
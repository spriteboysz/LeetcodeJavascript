/*
 * Author: Deean
 * Date: 2023-09-22 23:04
 * FilePath: LCP
 * Description:LCR 187. 破冰游戏
 */

/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
    if (num === 1) return 0;
    return (iceBreakingGame(num - 1, target) + target) % num;
};

console.log(iceBreakingGame(num = 12, target = 5));
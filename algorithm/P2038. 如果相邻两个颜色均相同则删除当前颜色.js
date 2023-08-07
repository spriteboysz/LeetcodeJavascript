/*
 * Author: Deean
 * Date: 2023-08-06 22:14
 * FilePath: algorithm
 * Description:2038. 如果相邻两个颜色均相同则删除当前颜色
 */

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    let diff = 0;
    for (let i = 0, j = 0, n = colors.length; i < n; i = j) {
        while (j < n && colors.charCodeAt(i) === colors.charCodeAt(j)) {
            j++;
        }
        if (j - i >= 3) {
            diff += colors.charCodeAt(i) === 'A'.charCodeAt(0) ? j - i - 2 : i + 2 - j;
        }
    }
    return diff > 0;
};

console.log(winnerOfGame(colors = "AAABABB"));
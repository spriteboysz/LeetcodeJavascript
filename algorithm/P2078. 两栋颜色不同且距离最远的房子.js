/*
 * Author: Deean
 * Date: 2023-07-01 22:36
 * FilePath: algorithm
 * Description:2078. 两栋颜色不同且距离最远的房子
 */


/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let distance1 = 0, distance2 = 0, n = colors.length;
    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            distance1 = i;
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            distance2 = n - 1 - i;
            break;
        }
    }
    return Math.max(distance1, distance2);
};

console.log(maxDistance(colors = [1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance(colors = [1, 8, 3, 8, 3]));
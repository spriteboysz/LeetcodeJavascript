/*
 * Author: Deean
 * Date: 2022-10-05 16:21
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function (source, target) {
    const map = new Map();
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[0].length; j++) {
            map.set(source[i][j], (map.get(source[i][j]) || 0) + 1);
            map.set(target[i][j], (map.get(target[i][j]) || 0) - 1);
        }
    }
    return [...map.values()].filter(num => num > 0).reduce((a, b) => a + b, 0);
};

console.log(minimumSwitchingTimes([[1, 2, 3], [3, 4, 5]], [[1, 3, 5], [2, 3, 4]]));
 
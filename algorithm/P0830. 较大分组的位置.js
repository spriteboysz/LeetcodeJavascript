/*
 * Author: Deean
 * Date: 2023-07-03 23:16
 * FilePath: algorithm
 * Description:830. 较大分组的位置
 */


/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let group = [];
    let num = 1;
    for (let i = 0, n = s.length; i < n; i++) {
        if (i === n - 1 || s[i] !== s[i + 1]) {
            if (num >= 3) {
                group.push([i - num + 1, i]);
            }
            num = 1;
        } else {
            num += 1;
        }
    }
    return group;
};

console.log(largeGroupPositions("abbxxxxzzy"));
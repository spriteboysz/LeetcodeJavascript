/*
 * Author: Deean
 * Date: 2023-08-08 23:33
 * FilePath: algorithm
 * Description:187. 重复的DNA序列
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let map = new Map();
    for (let i = 0, n = s.length; i + 10 <= n; i++) {
        let key = s.slice(i, i + 10);
        map.set(key, (map.get(key) || 0) + 1);
    }
    let repeated = [];
    map.forEach((v, k) => {
        if (v > 1) {
            repeated.push(k);
        }
    })
    return repeated;
};

console.log(findRepeatedDnaSequences(s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
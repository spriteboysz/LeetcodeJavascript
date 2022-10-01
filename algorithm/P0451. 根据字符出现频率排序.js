/*
 * Author: Deean
 * Date: 2022-10-01 19:03
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const map = new Map();
    for (const c of s.split("")) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    //console.log(map);
    const countArr = [...map].sort((a, b) => b[1] - a[1]);
    let ss = "";
    for (const [c, count] of countArr) {
        ss += c.repeat(count);
    }
    return ss;
};

console.log(frequencySort("Aabb"));
console.log(frequencySort("cacaca"));

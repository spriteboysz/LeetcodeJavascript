/*
 * Author: Deean
 * Date: 2023-10-07 23:24
 * FilePath: LCP
 * Description: LCR 033. 字母异位词分组
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let s of strs) {
        let key = s.split("").sort().join("");
        if (map.has(key)) {
            let value = map.get(key);
            value.push(s);
            map.set(key, value);
        } else {
            map.set(key, [s]);
        }
    }
    return [...map.values()];
};

console.log(groupAnagrams(strs = ["eat", "tea", "tan", "ate", "nat", "bat"]));
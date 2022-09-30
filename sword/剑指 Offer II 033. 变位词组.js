/*
 * Author: Deean
 * Date: 2022-09-30 23:48
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    strs.forEach((word) => {
        let key = word.split("").sort().join("");
        let value = map.get(key) ? map.get(key) : [];
        value.push(word);
        map.set(key, value);
    });
    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
 
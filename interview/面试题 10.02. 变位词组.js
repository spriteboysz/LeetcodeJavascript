/*
 * Author: Deean
 * Date: 2022-10-02 22:36
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (const word of strs) {
        let key = word.split("").sort().join("");
        let value = map.has(key) ? map.get(key) : [];
        value.push(word);
        map.set(key, value);
    }
    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
 
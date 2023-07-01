/*
 * Author: Deean
 * Date: 2023-06-30 22:52
 * FilePath: algorithm
 * Description:205. 同构字符串
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let m = s.length, n = t.length;
    if (m !== n) return false;
    let map1 = new Map(), map2 = new Map();
    for (let i = 0; i < m; i++) {
        if ((map1[s[i]] && map1[s[i]] !== t[i]) || (map2[t[i]] && map2[t[i]] !== s[i])) {
            return false;
        }
        map1[s[i]] = t[i];
        map2[t[i]] = s[i];
    }
    return true;
};

console.log(isIsomorphic(s = "paper", t = "title"));
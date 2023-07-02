/*
 * Author: Deean
 * Date: 2023-07-02 18:06
 * FilePath: algorithm
 * Description:859. 亲密字符串
 */


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let m = s.length, n = goal.length;
    if (m !== n) return false;
    if (s === goal) {
        let alphabet = new Array(26).fill(0);
        for (const c of s) {
            alphabet[c.charCodeAt(0) - 97] += 1;
        }
        for (let i = 0; i < 26; i++) {
            if (alphabet[i] >= 2) {
                return true;
            }
        }
        return false;
    } else {
        let first = -1, second = -1;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                if (first === -1)
                    first = i;
                else if (second === -1)
                    second = i;
                else
                    return false;
            }
        }
        return (second !== -1 && s[first] === goal[second] && s[second] === goal[first]);
    }
};

console.log(buddyStrings(s = "ab", goal = "ba"));
console.log(buddyStrings(s = "bb", goal = "bb"));
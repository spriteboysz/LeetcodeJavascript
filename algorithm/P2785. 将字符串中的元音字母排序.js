/*
 * Author: Deean
 * Date: 2023-09-21 23:41
 * FilePath: algorithm
 * Description:2785. 将字符串中的元音字母排序
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    var vowels = "AEIOUaeiou";
    var chars = [];
    for (let c of s) {
        if (vowels.includes(c)) {
            chars.push(c);
        }
    }
    chars.sort();
    var ss = "";
    for (let i = 0, pos = 0; i < s.length; i++) {
        if (vowels.includes(s.charAt(i))) {
            ss += chars[pos++];
        } else {
            ss += s.charAt(i);
        }
    }
    return ss;
};

console.log(sortVowels(s = "lEetcOde"));
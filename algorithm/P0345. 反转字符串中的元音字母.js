/*
 * Author: Deean
 * Date: 2023-07-01 10:59
 * FilePath: algorithm
 * Description:345. 反转字符串中的元音字母
 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = "aeiouAEIOU";
    let vowel = [];
    let ss = s.split('')
    for (const c of s) {
        if (vowels.includes(c)) {
            vowel.push(c);
        }
    }
    for (let i = 0, j = vowel.length - 1; i < ss.length; i++) {
        if (vowels.includes(ss[i])) {
            ss[i] = vowel[j--];
        }
    }
    return ss.join("");
};

console.log(reverseVowels(s = "leetcode"));
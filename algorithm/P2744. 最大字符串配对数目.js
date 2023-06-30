/*
 * Author: Deean
 * Date: 2023-06-29 23:01
 * FilePath: algorithm
 * Description:2744. 最大字符串配对数目
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let words2 = [];
    for (const word of words) {
        let ss = "";
        for (let i = word.length - 1; i >= 0; i--) {
            ss += word[i];
        }
        words2.push(ss);
    }
    let flag = Array(words.length).fill(true);
    let cnt = 0;
    for (let i = 0, n = words.length; i < n; i++) {
        if (!flag[i]) continue;
        for (let j = i + 1; j < n; j++) {
            if (!flag[j]) continue;
            if (words[i] === words2[j]) {
                cnt++;
                flag[i] = false;
                flag[j] = false;
            }
        }
    }
    return cnt;
};

console.log(maximumNumberOfStringPairs(words = ["cd", "ac", "dc", "ca", "zz"]));
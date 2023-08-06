/*
 * Author: Deean
 * Date: 2023-08-06 09:44
 * FilePath: LCP
 * Description:LCR 065. 单词的压缩编码
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    words.sort((word1, word2) => word1.length - word2.length);
    let cnt = 0, n = words.length;
    words.forEach((word, i) => {
        let flag = true;
        for (let j = i + 1; j < n; j++) {
            if (words[j].endsWith(word)) {
                flag = false;
                break;
            }
        }
        if (flag) cnt += word.length + 1;
    });
    return cnt;
};

console.log(minimumLengthEncoding(words = ["time", "me", "bell"]));
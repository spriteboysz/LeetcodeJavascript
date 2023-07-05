/*
 * Author: Deean
 * Date: 2023-07-05 21:24
 * FilePath: algorithm
 * Description:1592. 重新排列单词间的空格
 */


/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let n = text.length;
    let words = text.trim().split(/[\s+]/);
    let cnt = 0, m = 0;
    let words2 = [];
    for (const word of words) {
        if (word.length > 0) {
            cnt += 1;
            m += word.length;
            words2.push(word);
        }
    }
    let div = Math.floor((n - m) / (cnt - 1)), mod = (n - m) % (cnt - 1);
    if (cnt === 1) return words2[0] + " ".repeat(n - m);
    return words2.join(" ".repeat(div)) + " ".repeat(mod);
};

console.log(reorderSpaces(" practice   makes   perfect"));
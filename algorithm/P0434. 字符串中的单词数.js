/*
 * Author: Deean
 * Date: 2023-06-30 23:05
 * FilePath: algorithm
 * Description:434. 字符串中的单词数
 */


/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let ss = s.trim();
    let cnt = ss.length === 0 ? 0 : 1;
    for (let i = 1; i < ss.length; i++) {
        if (ss[i - 1] === " " && ss[i] !== " ") {
            cnt += 1;
        }
    }
    return cnt;
};

console.log(countSegments("Hello, my name is John"));
console.log(countSegments("   "));
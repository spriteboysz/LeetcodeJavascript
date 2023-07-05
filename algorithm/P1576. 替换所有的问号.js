/*
 * Author: Deean
 * Date: 2023-07-05 21:38
 * FilePath: algorithm
 * Description:1576. 替换所有的问号
 */


/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let ss = s.split("");
    for (let i = 0, n = ss.length; i < n; i++) {
        if (ss[i] !== "?") continue;
        for (let j = 0; j < 3; ++j) {
            if ((i > 0 && ss[i - 1] === String.fromCharCode('a'.charCodeAt(0) + j)) || (i < n - 1 && ss[i + 1] === String.fromCharCode('a'.charCodeAt(0) + j))) {
                continue;
            }
            ss[i] = String.fromCharCode('a'.charCodeAt(0) + j);
            break;
        }
    }
    return ss.join("");
};

console.log(modifyString("?as"));
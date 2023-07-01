/*
 * Author: Deean
 * Date: 2023-07-01 13:30
 * FilePath: algorithm
 * Description:868. 二进制间距
 */


/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let ss = n.toString(2);
    let maximum = 0, last = 0;
    for (let i = 1; i < ss.length; i++) {
        if (ss[i] === "1") {
            maximum = Math.max(maximum, i - last);
            last = i;
        }
    }
    return maximum;
};

console.log(binaryGap(n = 22));
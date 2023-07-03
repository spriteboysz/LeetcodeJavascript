/*
 * Author: Deean
 * Date: 2023-07-02 19:00
 * FilePath: algorithm
 * Description:1556. 千位分隔数
 */


/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let s = n.toString();
    let ss = "", count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        ss = s[i] + ss;
        count++;
        if (count % 3 === 0) {
            if (i !== 0) ss = "." + ss;
            count = 0;
        }
    }
    return ss;
};

console.log(thousandSeparator(n = 123456789));
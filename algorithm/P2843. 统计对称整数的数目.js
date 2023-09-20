/*
 * Author: Deean
 * Date: 2023-09-20 23:26
 * FilePath: algorithm
 * Description:2843. 统计对称整数的数目
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    var check = function (num) {
        var sum = 0;
        var ss = num.toString();
        for (let i = 0, n = ss.length; i < n / 2; i++) {
            sum += parseInt(ss.charCodeAt(i).toString());
            sum -= parseInt(ss.charCodeAt(n / 2 + i).toString());
        }
        return sum === 0;
    }
    var cnt = 0;
    for (let i = low; i <= high; i++) {
        if (i.toString().length % 2 === 0 && check(i)) {
            cnt += 1;
        }
    }
    return cnt;
};
console.log(countSymmetricIntegers(low = 1200, high = 1230));
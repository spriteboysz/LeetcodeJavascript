/*
 * Author: Deean
 * Date: 2023-03-01 22:27
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    if (s.length <= k) return s;
    let ret = '';
    for (let i = 0; i < s.length; i += k)
        ret += eval(s.substring(i, i + k).split('').join('+'));
    return digitSum(ret, k);
};

console.log(digitSum("11111222223", 3));
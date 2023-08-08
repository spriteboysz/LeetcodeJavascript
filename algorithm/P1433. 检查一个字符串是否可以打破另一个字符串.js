/*
 * Author: Deean
 * Date: 2023-08-08 22:42
 * FilePath: algorithm
 * Description:1433. 检查一个字符串是否可以打破另一个字符串
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    let arr1 = [...s1].sort(), arr2 = [...s2].sort();
    let flag1 = false, flag2 = false;
    for (let i = 0, n = s1.length; i < n; i++) {
        if (arr1[i] > arr2[i]) flag1 = true;
        if (arr1[i] < arr2[i]) flag2 = true;
    }
    return !(flag1 && flag2);
};

console.log(checkIfCanBreak(s1 = "abc", s2 = "xya"));
/*
 * Author: Deean
 * Date: 2023-10-09 23:10
 * FilePath: LCP
 * Description: LCR 164. 破解闯关密码
 */


/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function (password) {
    password.sort((a, b) => ("" + a + b) - ("" + b + a));
    return password.join("");
};

console.log(crackPassword(password = [0, 3, 30, 34, 5, 9]));
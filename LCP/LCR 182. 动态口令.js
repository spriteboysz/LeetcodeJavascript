/*
 * Author: Deean
 * Date: 2023-10-09 23:55
 * FilePath: LCP
 * Description: LCR 182. 动态口令
 */

/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function (password, target) {
    return password.slice(target,) + password.slice(0, target);
};

console.log(dynamicPassword(password = "s3cur1tyC0d3", target = 4));
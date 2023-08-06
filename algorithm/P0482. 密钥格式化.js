/*
 * Author: Deean
 * Date: 2023-08-06 11:34
 * FilePath: algorithm
 * Description:482. 密钥格式化
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let keys = [], cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== '-') {
            cnt++;
            keys.push(s[i].toUpperCase());
            if (cnt % k === 0) {
                keys.push("-");
            }
        }
    }
    if (keys.length > 0 && keys[keys.length - 1] === '-') {
        keys.pop();
    }
    
    return keys.reverse().join('');
};

console.log(licenseKeyFormatting(s = "5F3Z-2e-9-w", k = 4));
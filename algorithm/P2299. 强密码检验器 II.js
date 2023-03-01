/*
 * Author: Deean
 * Date: 2023-03-01 21:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    if (password.length < 8) {
        return false;
    }
    const special = "!@#$%^&*()-+".split('');
    let flag1 = false, flag2 = false, flag3 = false, flag4 = false;
    for (let i = 0; i < password.length; i++) {
        if (i > 0 && password[i - 1] === password[i]) {
            return false;
        }
        if (special.includes(password[i])) {
            flag1 = true;
        } else if (password[i] >= 'a' && password[i] <= 'z') {
            flag2 = true;
        } else if (password[i] >= 'A' && password[i] <= 'Z') {
            flag3 = true;
        } else if (password[i] >= '0' && password[i] <= '9') {
            flag4 = true;
        }
    }
    return flag1 && flag2 && flag3 && flag4;
};

console.log(strongPasswordCheckerII("IloveLe3tcode!"));
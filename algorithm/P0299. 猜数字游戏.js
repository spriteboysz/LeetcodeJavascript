/*
 * Author: Deean
 * Date: 2023-08-06 11:49
 * FilePath: algorithm
 * Description:299. 猜数字游戏
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0, cows = 0;
    let digits1 = new Array(10).fill(0);
    let digits2 = new Array(10).fill(0);
    for (let i = 0, n = secret.length; i < n; i++) {
        if (secret[i] === guess[i]) {
            bulls += 1;
        } else {
            digits1[secret[i].charAt(0) - '0'.charAt(0)]++;
            digits2[guess[i].charAt(0) - '0'.charAt(0)]++;
        }
    }
    for (let i = 0; i < 10; i++) {
        cows += Math.min(digits1[i], digits2[i]);
    }
    return bulls + "A" + cows + "B";
};

console.log(getHint(secret = "1807", guess = "7810"));
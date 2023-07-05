/*
 * Author: Deean
 * Date: 2023-07-04 23:41
 * FilePath: algorithm
 * Description:1629. 按键持续时间最长的键
 */


/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {string}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    releaseTimes.unshift(0);
    let key = keysPressed[0], maximum = 0;
    for (let i = 1; i < releaseTimes.length; i++) {
        let last = releaseTimes[i] - releaseTimes[i - 1];
        if (last > maximum || (last === maximum && keysPressed[i - 1] > key)) {
            maximum = last;
            key = keysPressed[i - 1];
        }
    }
    return key;
};

console.log(slowestKey(releaseTimes = [9, 29, 49, 50], keysPressed = "cbcd"));
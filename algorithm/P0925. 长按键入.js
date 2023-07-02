/*
 * Author: Deean
 * Date: 2023-07-02 17:39
 * FilePath: algorithm
 * Description:925. 长按键入
 */


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let pos1 = 0;
    for (let pos2 = 0, n = typed.length; pos2 < n;) {
        if (name[pos1] === typed[pos2]) {
            pos1++;
            pos2++;
        } else if (pos1 > 0 && name[pos1 - 1] === typed[pos2]) {
            pos2++;
        } else {
            return false;
        }
    }
    return pos1 === name.length;
};

console.log(isLongPressedName(name = "alex", typed = "aaleex"));
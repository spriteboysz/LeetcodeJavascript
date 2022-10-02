/*
 * Author: Deean
 * Date: 2022-10-02 18:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let map = new Map(), index = 0;
    for (const c of key.split("")) {
        if (c !== " " && !map.has(c)) {
            map.set(c, index++);
        }
    }
    // console.log(map);
    let ss = "";
    for (const c of message.split("")) {
        if (map.has(c)) {
            ss += String.fromCharCode(map.get(c) + 97);
        } else {
            ss += c;
        }
    }
    return ss;
};

console.log(decodeMessage(key = "eljuxhpwnyrdgtqkviszcfmabo",
    message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"));
console.log(decodeMessage(key = "the quick brown fox jumps over the lazy dog",
    message = "vkbs bs t suepuv"))
 
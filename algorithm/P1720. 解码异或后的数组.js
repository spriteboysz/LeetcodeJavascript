/*
 * Author: Deean
 * Date: 2022-09-27 22:48
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let decoded = [first];
    for (const num of encoded) {
        first ^= num;
        decoded.push(first);
    }
    return decoded;
};

console.log(decode(encoded = [6, 2, 7, 3], first = 4));
 
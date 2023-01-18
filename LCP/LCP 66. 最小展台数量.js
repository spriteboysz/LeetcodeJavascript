/*
 * Author: Deean
 * Date: 2023/1/14 22:16
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
    let alphabet = Array(26).fill(0);
    for (const item of demand) {
        let cur = new Array(26).fill(0);
        for (const c of item) {
            cur[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            alphabet[i] = Math.max(alphabet[i], cur[i]);
        }
    }
    return alphabet.reduce((a, b) => a + b, 0);
};

console.log(minNumBooths(demand = ["acd", "bed", "accd"]));
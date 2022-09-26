/*
 * Author: Deean
 * Date: 2022-09-26 23:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let pre = 0;
    return bank.map((s) => s.split("").filter(item => item === "1").length)
        .reduce((acc, cur) => {
            if (cur > 0) {
                [acc, pre] = [acc + (pre * cur), cur];
            }
            return acc;
        }, 0);
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
 
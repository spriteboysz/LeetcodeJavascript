/*
 * Author: Deean
 * Date: 2022-10-04 20:11
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let ss = new Array(10).fill(0).map((_, i) => {
        return (9 - i).toString().repeat(3);
    });
    for (const s of ss) {
        if (num.includes(s)) return s;
    }
    return "";
};
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));

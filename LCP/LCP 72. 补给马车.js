/*
 * Author: Deean
 * Date: 2023-08-14 23:18
 * FilePath: LCP
 * Description:LCP 72. 补给马车
 */

/**
 * @param {number[]} supplies
 * @return {number[]}
 */
var supplyWagon = function (supplies) {
    let n = supplies.length;
    while (supplies.length > Math.floor(n / 2)) {
        let minimum = Number.MAX_SAFE_INTEGER, index = 0;
        for (let i = 0; i < supplies.length - 1; ++i) {
            let curSum = supplies[i] + supplies[i + 1];
            if (curSum < minimum) {
                minimum = curSum;
                index = i;
            }
        }
        supplies[index] = minimum;
        supplies.splice(index + 1, 1);
    }
    return supplies;
};

console.log(supplyWagon(supplies = [7, 3, 6, 1, 8]));
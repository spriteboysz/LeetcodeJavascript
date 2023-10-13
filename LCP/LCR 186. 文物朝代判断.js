/*
 * Author: Deean
 * Date: 2023-10-09 23:57
 * FilePath: LCP
 * Description: LCR 186. 文物朝代判断
 */


/**
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function (places) {
    let kingsCount = 0, numsCount = 5;
    places.sort((a, b) => a - b);
    for (let i = 0; i < numsCount - 1; i++) {
        if (places[i] === 0) {
            kingsCount += 1;
        } else if (places[i] === places[i + 1]) {
            return false;
        }
    }
    return places[4] - places[kingsCount] < 5;
};
console.log(checkDynasty(places = [0, 6, 9, 0, 7]));
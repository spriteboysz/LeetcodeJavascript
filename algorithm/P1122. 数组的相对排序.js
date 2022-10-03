/*
 * Author: Deean
 * Date: 2022-10-03 09:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const map = new Map();
    arr2.forEach((num, i) => map.set(num, i + 1));
    arr1.sort((a, b) => {
        const ai = map.get(a), bi = map.get(b);
        if (ai && bi) {
            return ai - bi;
        } else if (!ai && !bi) {
            return a - b;
        } else {
            return ai ? -1 : 1;
        }
    });
    return arr1;
};

console.log(relativeSortArray(arr1 = [28, 6, 22, 8, 44, 17], arr2 = [22, 28, 8, 6]));
 
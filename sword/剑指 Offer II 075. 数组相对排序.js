/*
 * Author: Deean
 * Date: 2022-10-03 09:31
 * FilePath: sword
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
        let ai = map.get(a), bi = map.get(b);
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

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
 
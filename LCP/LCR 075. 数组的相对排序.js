/*
 * Author: Deean
 * Date: 2023-10-08 22:43
 * FilePath: LCP
 * Description: LCR 075. 数组的相对排序
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = new Map();
    for (let i = 0, n = arr2.length; i < n; i++) {
        map.set(arr2[i], i + 1);
    }
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

console.log(relativeSortArray(arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]));
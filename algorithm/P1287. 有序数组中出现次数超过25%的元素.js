/*
 * Author: Deean
 * Date: 2022-10-04 22:11
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > arr.length / 4) {
            return num;
        }
    }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
 
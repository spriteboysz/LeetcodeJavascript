/*
 * Author: Deean
 * Date: 2023-08-03 23:07
 * FilePath: algorithm
 * Description:1385. 两个数组间的距离值
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let distance = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.every(item => Math.abs(item - arr1[i]) > d)) {
            distance++;
        }
    }
    return distance;
};

console.log(findTheDistanceValue(arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2));
/*
 * Author: Deean
 * Date: 2022-10-03 17:30
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let distance = function (a, b) {
        return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
    }

    let cnt = 0;
    for (let i = 0; i < points.length; i++) {
        let arr = [];
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            arr.push(distance(points[i], points[j]));
        }

        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (j === k) continue;
                if (arr[j] === arr[k]) cnt++;
            }
        }
    }
    return cnt;
};
console.log(numberOfBoomerangs([[1, 1], [2, 2], [3, 3]]));
 
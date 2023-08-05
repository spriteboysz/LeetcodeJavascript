/*
 * Author: Deean
 * Date: 2023-08-05 22:02
 * FilePath: algorithm
 * Description:2249. 统计圆内格点数目
 */


/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function (circles) {
    let set = new Set();
    circles.forEach((circle) => {
        let [x, y, r] = circle;
        for (let i = r - x; i <= r + x; i++) {
            for (let j = r - y; j <= r + y; j++) {
                if ((i - x) * (i - x) + (j - y) * (j - y) <= r * r) {
                    set.add(i + "#" + j);
                }
            }
        }
    });
    return set.size;
};

console.log(countLatticePoints(circles = [[2, 2, 2], [3, 4, 1]]));
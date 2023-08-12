/*
 * Author: Deean
 * Date: 2023-08-12 11:41
 * FilePath: algorithm
 * Description:593. 有效的正方形
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    var process = function (p1, p2) {
        let [x1, y1] = p1, [x2, y2] = p2;
        return (x1 - x2) ** 2 + (y1 - y2) ** 2;
    }
    
    let set = new Set();
    let points = [p1, p2, p3, p4];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            set.add(process(points[i], points[j]));
        }
    }
    return set.size === 2 && !set.has(0);
};

console.log(validSquare(p1 = [0, 0], p2 = [1, 1], p3 = [1, 0], p4 = [0, 1]));
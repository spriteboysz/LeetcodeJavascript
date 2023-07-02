/*
 * Author: Deean
 * Date: 2023-07-02 18:51
 * FilePath: algorithm
 * Description:836. 矩形重叠
 */


/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    return rec2[0] < rec1[2] && rec2[1] < rec1[3] && rec2[2] > rec1[0] && rec2[3] > rec1[1];
};

console.log(isRectangleOverlap(rec1 = [0, 0, 2, 2], rec2 = [1, 1, 3, 3]));
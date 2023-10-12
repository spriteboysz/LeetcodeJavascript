/*
 * Author: Deean
 * Date: 2023-10-09 22:59
 * FilePath: LCP
 * Description: LCR 146. 螺旋遍历二维数组
 */


/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
    var nums = [];
    if (array.length === 0 || array[0].length === 0) {
        return nums;
    }

    var left = 0, right = array[0].length - 1, top = 0, bottom = array.length - 1;
    while (true) {
        for (let i = left; i <= right; i++) {
            nums.push(array[top][i]);
        }
        top++;
        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            nums.push(array[i][right]);
        }
        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) {
            nums.push(array[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;

        for (let i = bottom; i >= top; i--) {
            nums.push(array[i][left]);
        }
        left++;
        if (left > right) break;
    }
    return nums;
};

console.log(spiralArray(array = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]));
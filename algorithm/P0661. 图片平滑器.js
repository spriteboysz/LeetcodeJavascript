/*
 * Author: Deean
 * Date: 2023-08-04 22:07
 * FilePath: algorithm
 * Description:661. 图片平滑器
 */

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let m = img.length, n = img[0].length;
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let num = 0, sum = 0;
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        sum += img[x][y];
                        num += 1;
                    }
                }
            }
            grid[i][j] = Math.floor(sum / num);
        }
    }
    return grid;
};

console.log(imageSmoother(img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]]));
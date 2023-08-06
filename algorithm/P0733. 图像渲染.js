/*
 * Author: Deean
 * Date: 2023-08-06 10:23
 * FilePath: algorithm
 * Description:733. 图像渲染
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let m = image.length, n = image[0].length;
    let old = image[sr][sc];
    if (old === color) return image;
    var dfs = function (i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== old) {
            return;
        }
        image[i][j] = color;
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };
    
    dfs(sr, sc);
    return image;
};

console.log(floodFill(image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2));
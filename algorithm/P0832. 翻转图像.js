/*
 * Author: Deean
 * Date: 2023/1/11 23:00
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const n = image.length;
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < Math.floor(n / 2); i++) {
            [image[k][i], image[k][n - 1 - i]] = [image[k][n - 1 - i], image[k][i]];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            image[i][j] = image[i][j] === 1 ? 0 : 1;
        }
    }
    return image;
};

console.log(flipAndInvertImage(image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
/*
 * Author: Deean
 * Date: 2022-09-28 00:06
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let src = [], dst = [];
    paths.forEach(function (path) {
        src.push(path[0]);
        dst.push(path[1]);
    });
    for (const city of dst) {
        if (!src.includes(city)) {
            return city;
        }
    }
};

console.log(destCity(paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
 
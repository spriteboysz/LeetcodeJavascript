/*
 * Author: Deean
 * Date: 2023-07-02 19:10
 * FilePath: algorithm
 * Description:1496. 判断路径是否相交
 */


/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let visited = new Set();
    let x = 0, y = 0;
    visited.add(x + "#" + y);
    for (const direction of path) {
        switch (direction) {
            case "N":
                y += 1;
                break;
            case "S":
                y -= 1;
                break;
            case "W":
                x -= 1;
                break;
            case "E":
                x += 1;
                break;
        }
        if (visited.has(x + "#" + y)) {
            return true;
        }
        visited.add(x + "#" + y);
    }
    return false;
};

console.log(isPathCrossing(path = "NESWW"));
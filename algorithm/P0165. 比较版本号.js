/*
 * Author: Deean
 * Date: 2023-08-12 14:57
 * FilePath: algorithm
 * Description:165. 比较版本号
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split("."), v2 = version2.split(".");
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        let x = 0, y = 0;
        if (i < v1.length) x = parseInt(v1[i]);
        if (i < v2.length) y = parseInt(v2[i]);
        if (x === y) continue;
        return x > y ? 1 : -1;
    }
    return 0;
};

console.log(compareVersion(version1 = "1.01", version2 = "1.001"));
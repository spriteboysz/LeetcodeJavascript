/*
 * Author: Deean
 * Date: 2023-10-08 23:04
 * FilePath: LCP
 * Description: LCR 120. 寻找文件副本
 */

/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
    let visited = new Set();
    for (let document of documents) {
        if (visited.has(document)) {
            return document;
        }
        visited.add(document);
    }
    return -1;
};

console.log(findRepeatDocument(documents = [2, 5, 3, 0, 5, 0]));
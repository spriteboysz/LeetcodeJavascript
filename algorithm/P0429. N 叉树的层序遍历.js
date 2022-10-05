/*
 * Author: Deean
 * Date: 2022-10-05 20:52
 * FilePath: algorithm
 * Description: 
 */


// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let values = [], queue = [root];
    while (queue.length) {
        let size = queue.length, level = [];
        for (let i = 0; i < size; i++) {
            node = queue.shift();
            level.push(node.val);
            for (const child of node.children) {
                queue.push(child);
            }
        }
        values.push(level);
    }
    return values;
};

console.log();
 
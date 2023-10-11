/*
 * Author: Deean
 * Date: 2023-10-07 23:47
 * FilePath: LCP
 * Description: LCR 044. 在每个树行中找最大值
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    let levels = [];
    if (!root) return levels;
    let queue = [root];
    while (queue.length > 0) {
        let n = queue.length, maximum = -Infinity;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            maximum = Math.max(maximum, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(maximum);
    }
    return levels;
};

console.log(largestValues(TreeNode.create("[1,3,2,5,3,null,9]")));
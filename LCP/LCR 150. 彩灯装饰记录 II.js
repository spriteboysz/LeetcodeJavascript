/*
 * Author: Deean
 * Date: 2023-10-08 23:53
 * FilePath: LCP
 * Description: LCR 150. 彩灯装饰记录 II
 */

const TreeNode = require("../common/TreeNode");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
    let levels = [];
    if (!root) return levels;
    let queue = [root];
    while (queue.length > 0) {
        let level = [];
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(level);
    }
    return levels;
};

console.log(decorateRecord(TreeNode.create("[8,17,21,18,null,null,6]")));
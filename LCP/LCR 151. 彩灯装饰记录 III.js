/*
 * Author: Deean
 * Date: 2023-10-08 23:54
 * FilePath: LCP
 * Description: LCR 151. 彩灯装饰记录 III
 */

const TreeNode = require("../common/TreeNode");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
    let levels = [];
    if (!root) return levels;
    let queue = [root], depth = 1;
    while (queue.length > 0) {
        let level = [];
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            if (depth % 2 === 1) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth += 1;
        levels.push(level);
    }
    return levels;
};

console.log(decorateRecord(TreeNode.create("[8,17,21,18,null,null,6]")));
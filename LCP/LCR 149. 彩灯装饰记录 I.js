/*
 * Author: Deean
 * Date: 2023-10-08 23:49
 * FilePath: LCP
 * Description:LCR 149. 彩灯装饰记录 I
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var decorateRecord = function (root) {
    let levels = [];
    if (!root) return levels;
    let queue = [root];
    while (queue.length > 0) {
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            levels.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return levels;
};

console.log(decorateRecord(TreeNode.create("[8,17,21,18,null,null,6]")));
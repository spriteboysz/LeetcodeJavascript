/*
 * Author: Deean
 * Date: 2023-06-12 23:40
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let levels = [];
    if (root === null) return levels;
    let queue = [root];
    let high = 0;
    while (queue.length) {
        let level = [];
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (high % 2) {
            level.reverse();
        }
        high++;
        levels.push(level);
    }
    return levels;
};

console.log(zigzagLevelOrder(TreeNode.create("[3,9,20,null,null,15,7]")));
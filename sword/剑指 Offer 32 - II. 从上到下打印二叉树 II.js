/*
 * Author: Deean
 * Date: 2022-10-04 14:40
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let levels = [], queue = [];
    if (!root) return levels;
    queue.push(root);
    while (queue.length > 0) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(level);
    }
    return levels;
};

console.log(levelOrder(TreeNode.create("[3,9,20,null,null,15,7]")));
 
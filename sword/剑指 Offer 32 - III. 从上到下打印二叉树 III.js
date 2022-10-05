/*
 * Author: Deean
 * Date: 2022-10-05 23:46
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let levels = [], queue = [root];
    while (queue.length) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (levels.length % 2 !== 0) level.reverse();
        levels.push(level);
    }
    return levels;
};

console.log(levelOrder(TreeNode.create("[3,9,20,null,null,15,7]")));
 
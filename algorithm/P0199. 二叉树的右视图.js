/*
 * Author: Deean
 * Date: 2022-10-05 20:16
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let right = [], queue = [root];
    while (queue.length > 0) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        right.push(level[level.length - 1]);
    }
    return right;
};

console.log(rightSideView(TreeNode.create("[1,2,3,null,5,null,4]")));
 
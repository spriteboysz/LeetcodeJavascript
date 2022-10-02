/*
 * Author: Deean
 * Date: 2022-10-02 22:42
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    if (!root) return null;
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (!root.left && !root.right && root.val === target) {
        root = null;
    }
    return root;
};

let root = TreeNode.create("[1,2,null,2,null,2]"), target = 2;
console.log(removeLeafNodes(root, target).toString());
 
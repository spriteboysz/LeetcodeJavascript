/*
 * Author: Deean
 * Date: 2023-08-06 09:54
 * FilePath: algorithm
 * Description:814. 二叉树剪枝
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    if (!root) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (!root.left && !root.right && root.val === 0) {
        return null;
    }
    return root;
};

console.log(pruneTree(TreeNode.create("[1,0,1,0,0,0,1]")).toString());
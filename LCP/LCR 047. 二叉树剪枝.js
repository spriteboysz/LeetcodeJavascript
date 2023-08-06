/*
 * Author: Deean
 * Date: 2023-08-06 09:48
 * FilePath: LCP
 * Description:LCR 047. 二叉树剪枝
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    if (root === null) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (root.left === null && root.right === null && root.val === 0) {
        return null;
    }
    return root;
};

console.log(pruneTree(TreeNode.create("[1,null,0,0,1]")).toString());
/*
 * Author: Deean
 * Date: 2023-10-09 23:37
 * FilePath: LCP
 * Description: LCR 176. 判断是否为平衡二叉树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    var depth = function (root) {
        if (!root) return 0;
        return Math.max(depth(root.left), depth(root.right)) + 1;
    }

    if (!root) return true;
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

console.log(isBalanced(TreeNode.create("[3,9,20,null,null,15,7]")));
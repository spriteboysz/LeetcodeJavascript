/*
 * Author: Deean
 * Date: 2023-10-09 22:48
 * FilePath: LCP
 * Description: LCR 144. 翻转二叉树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return root;
    let tmp = mirrorTree(root.left);
    root.left = mirrorTree(root.right);
    root.right = tmp;
    return root;
};

console.log(mirrorTree(TreeNode.create("[5,7,9,8,3,2,4]")).toString());
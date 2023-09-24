/*
 * Author: Deean
 * Date: 2023-09-23 15:00
 * FilePath: LCP
 * Description:LCR 124. 推理二叉树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var deduceTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    if (index !== 0) {
        root.left = deduceTree(preorder.slice(1, 1 + index), inorder.slice(0, index));
    }
    if (index !== preorder.length - 1) {
        root.right = deduceTree(preorder.slice(1 + index), inorder.slice(index + 1));
    }
    return root;
};

console.log(deduceTree(preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]));
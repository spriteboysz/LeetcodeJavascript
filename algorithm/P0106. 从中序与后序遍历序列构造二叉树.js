/*
 * Author: Deean
 * Date: 2023-08-13 17:28
 * FilePath: algorithm
 * Description:106. 从中序与后序遍历序列构造二叉树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) return null;
    if (inorder.length === 1) return new TreeNode(inorder[0]);
    let val = postorder.pop();
    let root = new TreeNode(val);
    let index = inorder.indexOf(val);
    root.left = buildTree(inorder.splice(0, index), postorder.splice(0, index));
    root.right = buildTree(inorder.splice(1), postorder);
    return root;
};

console.log(buildTree(inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]).toString());
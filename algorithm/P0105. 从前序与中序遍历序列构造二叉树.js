/*
 * Author: Deean
 * Date: 2022-10-06 22:13
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    let index = inorder.findIndex((item) => item === preorder[0]);
    let root = new TreeNode(preorder[0]);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};

console.log(buildTree(preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]).toString());
 
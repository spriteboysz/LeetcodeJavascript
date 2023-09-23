/*
 * Author: Deean
 * Date: 2023-09-23 15:18
 * FilePath: algorithm
 * Description:1008. 前序遍历构造二叉搜索树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    var create = function (preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;
        const root = new TreeNode(preorder[0]);
        const index = inorder.indexOf(preorder[0]);
        if (index !== 0) {
            root.left = create(preorder.slice(1, index + 1), inorder.slice(0, index));
        }
        if (index !== preorder.length - 1) {
            root.right = create(preorder.slice(index + 1), inorder.slice(index + 1));
        }
        return root;
    };

    const inorder = preorder.slice().sort((a, b) => a - b);
    return create(preorder, inorder);
};

console.log(bstFromPreorder(preorder = [8, 5, 1, 7, 10, 12]).toString());
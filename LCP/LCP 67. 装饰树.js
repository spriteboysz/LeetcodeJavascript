/*
 * Author: Deean
 * Date: 2023-06-11 17:38
 * FilePath: LCP
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js')
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var expandBinaryTree = function (root) {
    if (root.left) {
        root.left = new TreeNode(-1, expandBinaryTree(root.left), null);
    }
    if (root.right) {
        root.right = new TreeNode(-1, null, expandBinaryTree(root.right));
    }
    return root;
};


console.log(expandBinaryTree(TreeNode.create('[3,1,7,3,8,null,4]')).toString());
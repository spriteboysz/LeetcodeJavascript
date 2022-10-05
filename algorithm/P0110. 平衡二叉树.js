/*
 * Author: Deean
 * Date: 2022-10-05 19:49
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) return true;

    function height(root) {
        if (!root) return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }

    if (Math.abs(height(root.left) - height(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

console.log(isBalanced(TreeNode.create("[3,9,20,null,null,15,7]")));
console.log(isBalanced(TreeNode.create("[1,2,2,3,3,null,null,4,4]")));

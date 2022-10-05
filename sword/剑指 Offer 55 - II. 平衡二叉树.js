/*
 * Author: Deean
 * Date: 2022-10-05 23:54
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;

    function depth(root) {
        if (!root) return 0;
        return Math.max(depth(root.left), depth(root.right)) + 1;
    }

    if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

console.log(isBalanced(TreeNode.create("[3,9,20,null,null,15,7]")));
 
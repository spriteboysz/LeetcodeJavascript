/*
 * Author: Deean
 * Date: 2022-10-05 23:38
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function dfs(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        if (root1.val !== root2.val) return false;
        return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
    }

    return dfs(root, root);
};

console.log(isSymmetric(TreeNode.create("[1,2,2,3,4,4,3]")));
 
/*
 * Author: Deean
 * Date: 2022-10-03 22:47
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function dfs(p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return dfs(p.left, q.right) && dfs(p.right, q.left);
    }

    return dfs(root.left, root.right);
};

console.log(isSymmetric(TreeNode.create("[1,2,2,null,3,null,3]")));
 
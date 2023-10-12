/*
 * Author: Deean
 * Date: 2023-10-09 22:51
 * FilePath: LCP
 * Description:LCR 145. 判断对称二叉树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkSymmetricTree = function (root) {
    var dfs = function (p, q) {
        if (!p || !q) return !p && !q;
        return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
    }

    return dfs(root, root);
};

console.log(checkSymmetricTree(TreeNode.create("[6,7,7,8,9,9,8]")));
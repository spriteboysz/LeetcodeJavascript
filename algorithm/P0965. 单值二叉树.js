/*
 * Author: Deean
 * Date: 2022-10-01 23:22
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    let values = new Set();

    function dfs(root) {
        if (root === null) return;
        values.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return values.size === 1;
};

console.log(isUnivalTree(TreeNode.create("[2,2,2,5,2]")));
 
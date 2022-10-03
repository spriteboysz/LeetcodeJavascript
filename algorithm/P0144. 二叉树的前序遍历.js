/*
 * Author: Deean
 * Date: 2022-10-03 23:33
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let values = [];

    function dfs(root) {
        if (!root) return;
        values.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return values;
};

console.log(preorderTraversal(TreeNode.create("[1,null,2,3]")));
 